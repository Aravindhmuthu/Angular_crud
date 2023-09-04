import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../Service/employee.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  alert:boolean=false;
  edit:FormGroup;
  
  
  
  constructor(private empserve:EmployeeService,private route:ActivatedRoute,private FB:FormBuilder){
    this.edit= this.FB.group({
      id :[""],
      name: [""],
      emailid:[""],
      mobileNo:[""]
     
    })


  }
  ngOnInit(): void {
    this.empserve.getdata(this.route.snapshot.params['id']).subscribe((result=>{
      this.edit=new FormGroup({
        id:new FormControl(result['id']),
        name:new FormControl(result['name']),
        emailid:new FormControl(result['emailid']),
        mobileNo:new FormControl(result['mobileNo'])
      })
      
    }))
   }
   //edit=new FormGroup({
    //id:new FormControl(''),
    //name:new FormControl(''),
    //emailid:new FormControl(''),
    //mobileNo:new FormControl('')



  //})
  Onsubmit(){
  
    console.log(this.edit.get("name"))
    if(this.edit.value.id!=null && this.edit.value.id!=""){
      this.empserve.Updateemployee(this.edit.value).subscribe(response=>{
      });
      this.edit.setValue({
        id :"",
        name: "",
        emailid:"",
        mobileNo:""
      })
    }
    else{
      this.empserve.createemployee(this.edit.value).subscribe(response=>{
        
      });
      this.edit.setValue({
        id :"",
        name: "",
        emailid:"",
        mobileNo:""
      })
    }
  }  

}
