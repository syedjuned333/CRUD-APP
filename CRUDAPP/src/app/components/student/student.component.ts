import { ApiService } from './../../shared/api.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { studentdata } from './student.model';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/throw';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
showadd!:boolean
showupdate!:boolean
studentmodelobj:studentdata=new studentdata
formValue!:FormGroup
allstudentsdata!:any
  constructor(private formBuilder:FormBuilder,private api:ApiService) { }

  ngOnInit(): void {
    this.formValue=this.formBuilder.group({
name:['',Validators.required],
email:['',Validators.required],
mobile:['',Validators.required],
city:['',Validators.required ],
    })
    this.getdata()
  }
add(){
this.showadd=true;
this.showupdate=false;
}
update(){
this.showadd=false;
this.showupdate=true;
}
addstudent(){
  this.studentmodelobj.name=this.formValue.value.name;
  this.studentmodelobj.email=this.formValue.value.email;
  this.studentmodelobj.mobile=this.formValue.value.mobile;
  this.studentmodelobj.city=this.formValue.value.city;
  this.api.poststudent(this.studentmodelobj).subscribe(res=>{
    alert("record added succesfully");
    console.log(res)
    this.formValue.reset()
    this.getdata()
  },err=>{
alert("something went wrong");
  })
}
getdata(){
return  this..getstudent().
  subscribe(res=>{
this.allstudentsdata=res;

  })
}
}

