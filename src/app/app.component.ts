import { Component } from '@angular/core';
import { Workitem } from './wokitem/workitem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent {
  title = 'dashboard';

  // ArrayList
  workitems_ : Workitem[]


  constructor(){
   this.workitems_ =  [
    new Workitem(2974544,"Penalità :: Cancellazione righe :: As user I want to cancellare tutto prima che sia troppo tardi","TOMMAL", "Story"),
    new Workitem(2974546,"Penalità :: Cancellazione righe :: As user I want to cancellare tutto ","TOMMAL", "Task"),
   new Workitem(2974547,"Penalità :: Generico :: Cancellazione righe :: As user I want to cancellare tutto ","TOMMAL", "Task")
    ]
  }

  workItemClicked(workitem: Workitem){
    alert("Hai clickato WI: \n" + workitem.id)
  }


}
