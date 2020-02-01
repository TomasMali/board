import { Component } from '@angular/core';
import { Workitem } from './wokitem/workitem';
import { FormGroup, FormControl } from '@angular/forms';
import { WorkitemService } from './workitem.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent {
  ngOnInit() {
  }

  title = 'dashboard';

  // ArrayList
  workitems_: Workitem[]

  teams = [
    { name: 'team masber' },
    { name: 'team micved' },
    { name: 'team paolun' },
    { name: 'Colorado' },
    { name: 'team PO' },
    { name: 'team Luifra' },
    { name: 'team gasdal' },
    { name: 'team rigert' },
    { name: 'Team Documentale' }
  ];
  selectedTeam: string = this.teams[0].name;



  sprints = [
    { name: 'Sprint nr.' + 27 },
    { name: 'Sprint nr.' + 28 },
    { name: 'Sprint nr.' + 29 },
    { name: 'Sprint nr.' + 30 },
    { name: 'Sprint nr.' + 31 },
    { name: 'Sprint nr.' + 32 },
    { name: 'Sprint nr.' + 33 },
    { name: 'Sprint nr.' + 34 },
    { name: 'Sprint nr.' + 35 },
    { name: 'Sprint nr.' + 36 },
  ]

  selectedSprint: string = this.sprints[this.sprints.length - 1].name

subteams = [
  { name: 'Nessuno selezionato'},
  { name: 'CANTINE' },
  { name: 'JMRP'},
  { name: 'GALILEO V10'},
]

selectedSubTeam: string = this.subteams[0].name

  constructor(public WIService: WorkitemService) {
    /*
    this.WIService.makeRequestWorkItems().subscribe((data: Workitem )=> {
      var obj = JSON.stringify(data)


      for(var i =0; i<obj.length; i++  ){
this.workitems_.push(new Workitem(obj.message))
      }
    })
  
  */
    
    
  
   this.workitems_ =  [
      new Workitem({
        id: 14, plannedFor: 36,
        summary: "Penalità :: Cancellazione righe :: As user I want to cancellare tutto ",
        ownerBy: "TOMMAL",
        priority: "Medium",
        storyPoints: 1,
        state: "Veryfied",
        filedAgainst: "team masber"

      }),
      new Workitem({
        id: 13, plannedFor: 36,
        summary: "Penalità :: Cancellazione righe :: As user I want to cancellare tutto ",
        ownerBy: "TOMMAL",
        priority: "Medium",
        storyPoints: 3,
        state: "Closed",
        filedAgainst: "team masber"


      }),
      new Workitem({
        id: 12, plannedFor: 36,
        summary: "Penalità :: Cancellazione righe :: As user I want to cancellare tutto ",
        ownerBy: "TOMMAL",
        priority: "Medium",
        storyPoints: 0.5,
        state: "Open",
        filedAgainst: "team masber"


      }),
      new Workitem({
        id: 11, plannedFor: 36,
        summary: "Penalità :: Cancellazione righe :: As user I want to cancellare tutto ",
        ownerBy: "TOMMAL",
        priority: "Medium",
        storyPoints: 1,
        state: "Closed",
        filedAgainst: "team PO"

      }),
      new Workitem({
        id: 10, plannedFor: 36,
        summary: "Penalità :: Cancellazione righe :: As user I want to cancellare tutto ",
        ownerBy: "TOMMAL",
        priority: "Medium",
        storyPoints: 2,
        state: "Start working",
        filedAgainst: "team paolun"

      }),
      new Workitem({
        id: 9, plannedFor: 36,
        summary: "Penalità :: Cancellazione righe :: As user I want to cancellare tutto ",
        ownerBy: "TOMMAL",
        priority: "Medium",
        state: "Start working",
        filedAgainst: "team masber"
        

      }),
      new Workitem({
        id: 8, plannedFor: 36,
        summary: "Penalità :: Cancellazione righe :: As user I want to cancellare tutto ",
        ownerBy: "TOMMAL",
        priority: "Medium",
        state: "Start working",
        filedAgainst: "team rigert"
      }),
      ,
      new Workitem({
        id: 7, plannedFor: 36,
        summary: "Penalità :: Cancellazione righe :: As user I want to cancellare tutto ",
        ownerBy: "TOMMAL",
        priority: "Medium",
        state: "Start working",
        filedAgainst: "team rigert"
      }),

      ,
      new Workitem({
        id: 6, plannedFor: 36,
        summary: "Penalità :: Cancellazione righe :: As user I want to cancellare tutto ",
        ownerBy: "TOMMAL",
        priority: "Medium",
        state: "Start working",
        filedAgainst: "team rigert"
      }),
      ,
      new Workitem({
        id: 5, plannedFor: 36,
        summary: "Penalità :: Cancellazione righe :: As user I want to cancellare tutto ",
        ownerBy: "TOMMAL",
        priority: "Medium",
        state: "Start working",
        filedAgainst: "Team Documentale"
      }),
      ,
      new Workitem({
        id: 4, plannedFor: 36,
        summary: "Penalità :: Cancellazione righe :: As user I want to cancellare tutto ",
        ownerBy: "TOMMAL",
        priority: "Medium",
        state: "Start working",
        filedAgainst: "team Luifra"
      }),
      ,
      new Workitem({
        id: 3, plannedFor: 36,
        summary: "Penalità :: Cancellazione righe :: As user I want to cancellare tutto ",
        ownerBy: "TOMMAL",
        priority: "Medium",
        state: "Start working",
        filedAgainst: "team micved"
      }),
      ,
      new Workitem({
        id: 2, plannedFor: 36,
        summary: "Penalità :: Cancellazione righe :: As user I want to cancellare tutto ",
        ownerBy: "TOMMAL",
        priority: "Medium",
        state: "Start working",
        filedAgainst: "team PO"
      }),
      ,
      new Workitem({
        id: 1, plannedFor: 36,
        summary: "Penalità :: Cancellazione righe :: As user I want to cancellare tutto ",
        ownerBy: "TOMMAL",
        priority: "Medium",
        state: "Start working",
        filedAgainst: "team PO"
      }),




    ]

    
  }



getToDo(){
  return (this.workitems_.filter(x => {
    return x.state == "Open" && x.plannedFor == +(this.selectedSprint.substring(10))&& 
    x.filedAgainst == this.selectedTeam
  })).sort((wi: Workitem, wi1: Workitem) => wi.id - wi1.id )
}

getStartWorking(){
  return (this.workitems_.filter(x => {
    return x.state == "Start working" && x.plannedFor == +(this.selectedSprint.substring(10))&& 
    x.filedAgainst ===this.selectedTeam
  })).sort((wi: Workitem, wi1: Workitem) => wi.id - wi1.id )
}

getTest(){
  return (this.workitems_.filter(x => {
    return x.state == "Veryfied" && x.plannedFor == +(this.selectedSprint.substring(10))&& 
    x.filedAgainst == this.selectedTeam
  })).sort((wi: Workitem, wi1: Workitem) => wi.id - wi1.id )
}

getDone(){
  return (this.workitems_.filter(x => {
    return x.state == "Closed" && x.plannedFor == +(this.selectedSprint.substring(10))&& 
    x.filedAgainst == this.selectedTeam
  })).sort((wi: Workitem, wi1: Workitem) => wi.id - wi1.id )
}







  workItemClicked(workitem: Workitem) {
   alert("Hai clickato WI: \n" + workitem.id)
  }

  selectOptionTeam(sel) {
    console.log()
    
  }

  selectOptionSubTeam(sel) {
    console.log(sel)
  }

  selectOptionSprint(sel) {
    console.log(sel)
  }

  onSprintChange(event) {

    console.log(event.target.value)
  }


}
