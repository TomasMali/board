import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Workitem } from './wokitem/workitem';
import { Subject } from 'rxjs';
import { map, filter } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class WorkitemService {


  data: object
  loading: boolean
  board = "http://localhost:3008/board"
  insertWi = "http://localhost:3008/board/insert"
  deleteWi = "http://localhost:3008/board/delete_one"

  private workItemsUpdatet = new Subject<Workitem[]>()
  private workItems: Workitem[] = []

  constructor(public http: HttpClient) { }



  getWorkItemsUpdateListener() {
    return this.workItemsUpdatet.asObservable()
  }

  getAllWi(sprint: string) {
    this.http.get<{ message: any }>(this.board)
      .pipe(map(data => {
        
        return data.message.map(workI => {

          return {
            wi: workI.wi,
            storyPoint: workI.storyPoint,
            sprint: workI.sprint,
            description: workI.description,
            state: workI.state,
            color: workI.color
          }
        })
      } ))
      .subscribe(resultData => {
      //  console.log("I dati sono: " + resultData)
        this.workItems = resultData.filter(x => {
          return x.sprint === sprint
        })
        this.workItemsUpdatet.next([...this.workItems])
      })
  }

  getOne(wi) {
    return this.http.get<any>(this.board + "/getBoard/" + wi)
  }


  changeColorOrStateWorkItem(wi: Workitem) {
    return this.http.post<boolean>(this.insertWi, wi)
      .subscribe(
        resultData => {

          if (resultData) {
            // find the WorkItem and modify it
            var foundIndexWi = this.workItems.findIndex(x => x.wi === wi.wi)
            var wi_new: Workitem = { ...this.workItems[foundIndexWi] }
             // voglio modificare lo stato
            if(wi.color == null){
              wi_new.state = wi.state
            }
            else
            // voglio modificare il colore
            if(wi.state == null){
              wi_new.color = wi.color
            }
            this.workItems[foundIndexWi] = wi_new
            this.workItemsUpdatet.next([...this.workItems])
          }

        },
        err => console.log(err)
      )

  }




  insertWorkItem(wi: Workitem) {
    return this.http.post<{message: boolean}>(this.insertWi, wi)
      .subscribe(
        resultData => {

          console.log(resultData)

          if (resultData.message) {
               this.workItems.push(wi)
               this.workItemsUpdatet.next([...this.workItems])
          }
          else{
            alert("Work item già esistente")
          }
        

        },
        err => console.log(err)
      )


  }







  deleteWorkI(wi: number, sprint: string) {

    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: {
        wi: wi,
        sprint: sprint
      }
    }

     this.http.delete<any>(this.deleteWi, options)
    .subscribe(
      res => {
        this.workItems.splice(this.workItems.findIndex(function(i){
          return i.wi === wi;
      }), 1);
      
        this.workItemsUpdatet.next([...this.workItems])
      },
      err => alert("Problemi con la cancellazione!")
    )
  }


}
