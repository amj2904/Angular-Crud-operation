import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
url="http://localhost:3000/posts";
urlSignUp="http://localhost:3000/signup";
urlcontactus="http://localhost:3000/contactus";


  constructor(private _http:HttpClient) { }
 

  postRestaurent(data:any){
    return this._http.post<any>(this.url,data).pipe(map((res:any)=>{
      return res;
    }))
  }
  getRestaurent(){
    return this._http.get<any>(this.url,).pipe(map((res:any)=>{
      return res;
    }))
  }
  updateRestaurent(data:any,id:number){
    return this._http.put<any>(this.url+"/"+id,data).pipe(map((res:any)=>{
      return res;
    }))
  }
  deleteRestaurent(id:number){
    return this._http.delete<any>(this.url+"/"+id).pipe(map((res:any)=>{
      return res;
    }))
  }
  getSignUp(){
    return this._http.get<any>(this.urlSignUp,).pipe(map((res:any)=>{
      return res;
    }))
  }
  getcontactus(){
    return this._http.get<any>(this.urlcontactus,).pipe(map((res:any)=>{
      return res;
    }))
  }
  

}
