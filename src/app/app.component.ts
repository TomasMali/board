import { Component, OnInit, OnDestroy } from '@angular/core';
import { Workitem } from './wokitem/workitem';
import { FormGroup, FormControl } from '@angular/forms';
import { WorkitemService } from './workitem.service';
import { Subscription } from 'rxjs';
import { MessagingService } from './service/messaging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent implements OnInit, OnDestroy {
  message;
//
  title = 'dashboard';
  malFormed: boolean = false

  workItems: Workitem[] = [];

  percTodo = 0
  percStart = 0
  percTest = 0
  percDone = 0

  private workItemSUb: Subscription

  sprintNumber: string[] = ["Sprint 07", "Sprint 08", "Sprint 09",
    "Sprint 10", "Sprint 11", "Sprint 12", "Sprint 13"]

  selectedSprintNumber: string = ""


  constructor(public WIService: WorkitemService, private messagingService: MessagingService) {
  }


  ngOnInit() {
    //
    this.messagingService.requestPermission()
    this.messagingService.receiveMessage()
    this.message = this.messagingService.currentMessage
    //

    this.selectedSprintNumber = this.getCookie("sprint") === "" ? "Sprint 07" : this.getCookie("sprint")

    this.WIService.getAllWi(this.selectedSprintNumber)

    //console.log(this.getCookie("sprint"))

    this.workItemSUb = this.WIService.getWorkItemsUpdateListener()
      .subscribe((workItems_: Workitem[]) => {
        this.workItems = workItems_
        this.selectedSprintNumber = this.getCookie("sprint") === "" ? "Sprint 07" : this.getCookie("sprint")

      })


  }

  ngOnDestroy() {
    this.workItemSUb.unsubscribe()
  }


  getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }


  onSprintChange(sprint: string) {
    this.selectedSprintNumber = sprint
    this.WIService.getAllWi(sprint)

    document.cookie = "sprint=" + sprint;
  }



  onSearch(data) {
    //   alert(  data.searchForm )
    this.WIService.getOne(data.searchForm).subscribe(
      res => {
        if (res.message != "Nessun risultato trovao") {
          alert(
            "******************  Il risultato del Wi :  *************** \n" +
            "Wi: " + res.message[0].wi + "\n" +
            "StoryPoint: " + res.message[0].storyPoint + "\n" +
            "Owner: " + res.message[0].owner + "\n" +
            "Description: " + res.message[0].description + "\n" +
            "State: " + res.message[0].state
          )
        }
        else {
          alert("Il WI " + data.searchForm + " non è stato trovato!")
        }
      },
      err => console.log(err)
    )


  }




  onInsertWiSubmit(data) {
    var obj = {
      wi: data.workItemForm,
      storyPoint: data.storyPointForm,
      sprint: data.selectedSprintNumber == null ? this.sprintNumber[0] : data.selectedSprintNumber,
      description: data.descForm,
      state: "N",
      color: "Lavender"
    }
    console.log("I coockie sono: " + this.getCookie("sprint"))

    this.WIService.insertWorkItem(obj)
  }

  sprints = [
    { name: 'N' },
    { name: 'S' },
    { name: 'T' },
    { name: 'D' }
  ]

  selectedSprint: string = this.sprints[this.sprints.length - 1].name

  selectOptionSprint(sel) {
    console.log(sel)
    this.ngOnInit();

  }





  getToDo() {
    var totalPoint = 0;
    var todo = 0;

    this.workItems.forEach(x => {
      totalPoint += x.storyPoint
      if (x.state === "N") {
        todo += x.storyPoint
      }
    })
    this.percTodo = todo * 100 / totalPoint
    return (this.workItems.filter(x => {
      return x.state === "N" // sta per to do 
    }))


  }

  getStartWorking() {
    var totalPoint = 0;
    var start = 0;

    this.workItems.forEach(x => {
      totalPoint += x.storyPoint
      if (x.state === "S") {
        start += x.storyPoint
      }
    })
    this.percStart = start * 100 / totalPoint

    return (this.workItems.filter(x => {
      return x.state === "S"
    }))
  }

  getTest() {
    var totalPoint = 0;
    var test = 0;

    this.workItems.forEach(x => {
      totalPoint += x.storyPoint
      if (x.state === "T") {
        test += x.storyPoint
      }
    })
    this.percTest = test * 100 / totalPoint

    return (this.workItems.filter(x => {
      return x.state === "T"
    }))
  }


  getDone() {
    var totalPoint = 0;
    var done = 0;

    this.workItems.forEach(x => {
      totalPoint += x.storyPoint
      if (x.state === "D") {
        done += x.storyPoint
      }
    })
    this.percDone = done * 100 / totalPoint

    return (this.workItems.filter(x => {
      return x.state === "D"
    }))
  }




}
