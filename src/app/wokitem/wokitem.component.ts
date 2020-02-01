import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Workitem } from './workitem';

@Component({
  selector: 'app-wokitem',
  templateUrl: './wokitem.component.html',
  styleUrls: ['./wokitem.component.css']
})
export class WokitemComponent implements OnInit {

@Input() workitem: Workitem
@Output() onWorkItemClicked : EventEmitter<Workitem>

  constructor() {
    this.onWorkItemClicked = new EventEmitter<Workitem>()
   }

  ngOnInit() {
  }


  onClickWI(){
       this.onWorkItemClicked.emit(this.workitem)
  }

}
