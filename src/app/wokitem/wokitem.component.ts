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
  @Output() onWorkItemClicked: EventEmitter<Workitem>

  constructor(private WIService: WorkitemService) {
    this.onWorkItemClicked = new EventEmitter<Workitem>()

  }

  ngOnInit() {
    this.selectedState = this.workitem.getState()
  }


  states = [
    { name: 'N' },
    { name: 'S' },
    { name: 'T' },
    { name: 'D' }

  ]

  selectedState: string = ""

  selectOptionState(sel) {
    this.selectedState = this.workitem.getState()

    this.WIService.postWorkItem({
      wi: this.workitem.getWi(),
      state: sel
    })
      .subscribe(
        res => {
          window.location.reload();
        },
        err => console.log(err)
      )

  }

  onClickWI() {
    this.onWorkItemClicked.emit(this.workitem)
  }

 


  deleteWorkItem() {

    if (confirm("Stai per cancellare il WI, proseguire?")) {
      //  alert(this.workitem.getWi())
      this.WIService.deleteWorkI({
        wi: this.workitem.getWi()
      })
        .subscribe(
          res => {
            window.location.reload();
          },
          err => console.log(err)
        )
    }

  }

}
