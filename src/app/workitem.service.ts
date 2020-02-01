import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Workitem } from './wokitem/workitem';

@Injectable({
  providedIn: 'root'
})
export class WorkitemService {
  data: object
  loading: boolean

  constructor(public http: HttpClient) { }

public makeRequestWorkItems(){
this.loading = true
 return this.http.get<Workitem>('http://localhost:3000/wokitems')

}

}
