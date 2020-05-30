import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Workitem } from './wokitem/workitem';
import { Subject } from 'rxjs';
import { map, filter } from 'rxjs/operators'
import { createOfflineCompileUrlResolver } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class WorkitemService {    


  data: object
  loading: boolean


  board = "https://board--server.herokuapp.com/board"
  insertWi = "https://board--server.herokuapp.com/board/insert"
  deleteWi = "https://board--server.herokuapp.com/board/delete_one"
  //
  pushnotification = "https://board--server.herokuapp.com/pushtoken"
  pushnotificationInsert = "https://board--server.herokuapp.com/pushtoken/insert"



/*
  board = "https://93.49.6.246:3008/board"
  insertWi = "https://93.49.6.246:3008/insert"
  deleteWi = "https://93.49.6.246:3008/board/delete_one"
  //
  pushnotification = "https://93.49.6.246:3008/pushtoken"
  pushnotificationInsert = "https://93.49.6.246:3008/pushtoken/insert"

  */



  private workItemsUpdatet = new Subject<Workitem[]>()
  private workItems: Workitem[] = []

  pushNotificationTokens: string[] = []

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
      }))
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
            if (wi.color == null) {
              wi_new.state = wi.state
            }
            else
              // voglio modificare il colore
              if (wi.state == null) {
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
    return this.http.post<{ message: boolean }>(this.insertWi, wi)
      .subscribe(
        resultData => {

          console.log(resultData)

          if (resultData.message) {
            this.workItems.push(wi)
            this.workItemsUpdatet.next([...this.workItems])
          }
          else {
            alert("Work item già esistente")
          }


        },
        err => console.log(err)
      )

  }


  insertTokenPushNotification(token: string) {
    return this.http.post<{ message: boolean }>(this.pushnotificationInsert, {
      "token": token
    })
      .subscribe(
        resultData => {

          console.log(resultData)

          if (resultData.message) {
            console.log("Token inserito correnttamente")
          }
          else {
            console.log("Token pushNotification già esistente")
          }
        },
        err => console.log(err)
      )
  }

  notifyAll(wi: Workitem) {

    var state = ""


    if (wi.state === "N")
      state = "To do"
    else
      if (wi.state === "S")
        state = "Start working"
      else if (wi.state === "T")
        state = "Test"
      else if (wi.state === "D")
        state = "Done"

    this.http.get<{ message: any }>(this.pushnotification)
      .pipe(map(data => {
        return data.message.map(tokenReturned => {
          return tokenReturned.token
        })
      }))
      .subscribe(resultData => {
        this.pushNotificationTokens = resultData

        console.log("I dati token sono: " + this.pushNotificationTokens)

        // per ogni token manda un messaggio 


        this.pushNotificationTokens.forEach(token => {




          const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type': 'application/json',
              'Authorization': 'key=AAAA_tYOfNY:APA91bEL7LjhmU2jPjoQTLSI9hww7mDt7hLwcIPlyu6-c8GB_vcG39bflYUCxKOkKBz3iGgbRiWvylZ_CwUj_aWuYrzVbOkDGZcjNG6TRMiT6AN1KkQcJZKAK_n_jFc8uZDMxCR2ZNnQ'
            })
          };

          this.http.post<any>("https://fcm.googleapis.com/fcm/send", {
            "notification": {
              "title": "Dashboard",
              "icon": "",
              "image": "",
              "body": wi.description.substring(0,40) + " ---> " + state
            },
            "to": token
          }, httpOptions)
            .subscribe(
              resultData => {

                console.log(resultData)

                if (resultData.message) {
                  console.log("Token inserito correnttamente")
                }
                else {
                  console.log("Token pushNotification già esistente")
                }
              },
              err => console.log(err)
            )

        })


      })
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
          this.workItems.splice(this.workItems.findIndex(function (i) {
            return i.wi === wi;
          }), 1);

          this.workItemsUpdatet.next([...this.workItems])
        },
        err => alert("Problemi con la cancellazione!")
      )
  }


}
