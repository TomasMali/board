import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Workitem } from './workitem';
import { WorkitemService } from '../workitem.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-wokitem',
  templateUrl: './wokitem.component.html',
  styleUrls: ['./wokitem.component.css']
})
export class WokitemComponent implements OnInit {

  @Input() workitem: Workitem

  color: string = "Lavender"

  constructor(private WIService: WorkitemService) {

  }

  ngOnInit() {


this.colors = [
  { name: 'Lavender' },
  { name: 'yellow' },
  { name: 'GreenYellow' },
  { name: 'Lavender' },
  { name: "LightSkyBlue" },
  { name: "DarkOrange" },
  { name: "Orange" }
]

this.states = [
  { name: 'N' },
  { name: 'S' },
  { name: 'T' },
  { name: 'D' }

]

    this.selectedState = this.workitem.state
    this.selectedColor = this.workitem.color
  }


  colors = [
    { name: 'Lavender' },
    { name: 'yellow' },
    { name: 'GreenYellow' },
    { name: 'Lavender' },
    { name: "LightSkyBlue" },
    { name: "DarkOrange" },
    { name: "Orange" }

  ]

  selectedColor: string = ""

  selectOptionColors(colore) {

    this.selectedColor = this.workitem.color

    const workItem = {
      wi: this.workitem.wi,
      storyPoint: this.workitem.storyPoint,
      sprint: this.workitem.sprint,
      description: this.workitem.description,
      state: null,
      color: colore
    }
    this.WIService.changeColorOrStateWorkItem(workItem)



  }



  states = [
    { name: 'N' },
    { name: 'S' },
    { name: 'T' },
    { name: 'D' }

  ]

  selectedState: string = ""

  selectOptionState(sel) {
    this.selectedState = this.workitem.state

    const workItem = {
      wi: this.workitem.wi,
      storyPoint: this.workitem.storyPoint,
      sprint: this.workitem.sprint,
      description: this.workitem.description,
      state: sel,
      color: null
    }

    this.WIService.changeColorOrStateWorkItem(workItem)
        //
     //REMOVE   this.WIService.notifyAll(workItem)

  }





  deleteWorkItem() {
    if (confirm("Stai per cancellare il WI, proseguire?")) {
      this.WIService.deleteWorkI(this.workitem.wi, this.workitem.sprint)
    }
  }



}
