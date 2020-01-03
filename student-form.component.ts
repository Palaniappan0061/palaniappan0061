import { Component, OnInit } from '@angular/core';
import { CrudStudentApiService } from 'src/app/service/crud-student-api.service';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {

  studentForm:FormGroup;
  constructor(private fb:FormBuilder,api:CrudStudentApiService) { }

  ngOnInit() {
  }

  setForm():void{
    this.studentForm=this.fb.group({
id:'',
name:'',
email:'',
mobile:'',
gender:'',
dob:'',
subjects:this.fb.array([this.getSubjectGroup])
    });
  }

getSubjectGroup():FormGroup{
return this.fb.group({
  subject:'',
  mark:'',
  grade:''
});
}

submit(){

}

}
