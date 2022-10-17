import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient:HttpClient) { 
  }
  poststudent(data:any){
    return this.httpClient.post<any>("http://localhost:3000/posts",data).
  pipe(map((res:any)=>{
    return res;
  }))  }
  getstudent(){
    this.httpClient.get<any>("http://localhost:3000/posts").
    pipe(map((res:any)=>{
return res;
    }))
  }
  updatestudent(data:any,id:number){
    this.httpClient.put<any>("http://localhost:3000/posts/"+id,data).
    pipe(map((res:any)=>{
      return res;
    }))
  }
  deletestudent(id:number){
    this.httpClient.delete<any>("http://localhost:3000/posts/"+id)
    .pipe(map((res:any)=>{
return res;
    }))
  }
}
