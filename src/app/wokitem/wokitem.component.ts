import { Component, OnInit, Input } from '@angular/core';
import { Workitem } from './workitem';

@Component({
  selector: 'app-wokitem',
  templateUrl: './wokitem.component.html',
  styleUrls: ['./wokitem.component.css']
})
export class WokitemComponent implements OnInit {

@Input() workitem: Workitem

  constructor() { }

  ngOnInit() {
  }

}
