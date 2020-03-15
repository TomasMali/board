import { Component } from '@angular/core';
import { Workitem } from './wokitem/workitem';
import { FormGroup, FormControl } from '@angular/forms';
import { WorkitemService } from './workitem.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent {
  ngOnInit() {
    this.getAll()
  }

  title = 'dashboard';
  malFormed : boolean = false

  workItem: Workitem[] = [];


  constructor(public WIService: WorkitemService) {

  }

  refresh(): void {
    if(this.malFormed == false)
    window.location.reload();

  }

  onSearch(data){
     //   alert(  data.searchForm )
        this.WIService.getOne(data.searchForm).subscribe(
          res => {
            if(res.message != "Nessun risultato trovao"){
               alert(
                 "******************  Il risultato del Wi :  *************** \n" + 
                 "Wi: " + res.message[0].wi + "\n" +
                 "StoryPoint: " + res.message[0].storyPoint + "\n" +
                 "Owner: " + res.message[0].owner + "\n" + 
                 "Description: " + res.message[0].description + "\n" + 
                 "State: " + res.message[0].state 
                 )
            }
            else{
              alert( "Il WI " + data.searchForm + " non è stato trovato!")
            } 
          },
          err => console.log(err)
        )
  }

  onClickSubmit(data) {
   // alert("Ci sono stati degli errori: \n" )
var errors = ""

    if(typeof data.workItemForm != 'number'){
      this.malFormed = true
      errors += "WorkItem deve essere numerico! " + "\n"
    }
    if(typeof data.storyPointForm != 'number'){
      this.malFormed = true
      errors += "StoryPoint deve essere numerico! " + "\n"
    }
    if(data.status != "N" || data.status != "S" || data.status != "T" || data.status != "D"){
      this.malFormed = true
      errors += "Lo stato del WI non consentito! " + "\n"
    }

    if(errors != ""){
    //  alert("Ci sono stati degli errori: \n" + errors)
    }

    var obj = {
      wi: data.workItemForm,
      storyPoint: data.storyPointForm,
      owner: data.ownerForm,
      description: data.descForm,
      state: data.stato,
      color: "Lavender"
    }

    console.log(obj)

    this.WIService.postWorkItem(obj)
      .subscribe(
        res => {
        },
        err => console.log(err)
      )

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
    // this.getAll()
    // console.log(this.workitem.getWi())
  }

  getAll() {
    this.WIService.getAllWi().subscribe(
      res => {
        this.workItem.splice(0, this.workItem.length)
        for (var i = 0; i < res.message.length; i++) {
          var loc = <Workitem>res.message[i]
          this.workItem.push(new Workitem(loc.wi, loc.storyPoint, loc.owner, loc.description, loc.state, loc.color))
        }
      },
      err => console.log(err)
    )

  }




  getToDo() {
    return (this.workItem.filter(x => {
      return x.getState() === "N" // sta per to do 
    }))
  }

  getStartWorking() {
    return (this.workItem.filter(x => {
      return x.getState() === "S"
    }))
  }

  getTest() {
    return (this.workItem.filter(x => {
      return x.getState() === "T"
    }))
  }


  getDone() {
    return (this.workItem.filter(x => {
      return x.getState() === "D"
    }))
  }







  workItemClicked(workitem: Workitem) {
    alert("Hai clickato WI: \n" + workitem)
  }

  selectOptionTeam(sel) {
    console.log()

  }

  selectOptionSubTeam(sel) {
    console.log(sel)
  }



  onSprintChange(event) {

    console.log(event.target.value)
  }


}
