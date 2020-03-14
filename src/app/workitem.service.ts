import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Workitem } from './wokitem/workitem';

@Injectable({
  providedIn: 'root'
})
export class WorkitemService {
  data: object
  loading: boolean
   board = "https://93.49.6.246:3004/board"
   insertWi = "https://93.49.6.246:3004/board/insert"
   deleteWi = "https://93.49.6.246:3004/board/delete_one"

  constructor(public http: HttpClient) { }



 getAllWi(){
  return this.http.get<any>(this.board)
}

getOne(wi){
  return this.http.get<any>(this.board+"/getBoard/"+wi)
}

postWorkItem(wi){
return this.http.post<any>(this.insertWi, wi);
}

deleteWorkI(wi){
  const options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    body: {
      wi: wi.wi
    }
  }
return this.http.delete<any>(this.deleteWi, options);
}


}
