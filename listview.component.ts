import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../Service/employee.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Employee } from '../Models/Employee';

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.css']
})
export class ListviewComponent implements OnInit {
  Employeeformgroup:FormGroup;
  Emparr : Employee[]=[];
  constructor(private empserve:EmployeeService,private FB:FormBuilder){

    this.Employeeformgroup= this.FB.group({
      id :[""],
      name: [""],
      emailid:[""],
      mobileNo:[""]
     
    })
  }
  ngOnInit(): void {
    this.getemployees();
  }
getemployees(){
  this.empserve.Getemp().subscribe(response =>{
    this.Emparr=response
  })
}
Delete(id:string){
 this.empserve.Deleteemployee(id).subscribe(response=>{
   this.getemployees(); 
 })
 }
 //Edit(emp:Employee){
  //this.Employeeformgroup.setValue({
    //id :emp.id,
    //name: emp.name,
    //emailid:emp.emailid,
    //mobileNo:emp.mobileNo
  //})
//}
}
