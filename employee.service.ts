import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../Models/Employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private httpclient : HttpClient) {}
  Url = "https://localhost:7167/api/EMP";

  Getemp() : Observable<Employee[]>{
   return this.httpclient.get<Employee[]>(this.Url)
  }

  createemployee(emp: Employee):Observable<Employee>{
    emp.id= "0";
    return this.httpclient.post<Employee>(this.Url,emp)
  }

  Updateemployee(emp: Employee):Observable<Employee>{

     return this.httpclient.put<Employee>(this.Url+'/'+emp.id,emp);
  }

  Deleteemployee(id:string):Observable<Employee>{
    return this.httpclient.delete<Employee>(this.Url+'/'+id);
 }  

 getdata(id:string){
  return this.httpclient.get<Employee>(this.Url+'/'+id);
 }
}
