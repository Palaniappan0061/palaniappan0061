import { Component, OnInit } from '@angular/core';
import { CrudStudentApiService } from 'src/app/service/crud-student-api.service';
import {Students,Subject} from 'src/app/interfaces/studentForm.interface';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {

  studentList:Students[]=[];
  constructor( private api:CrudStudentApiService ) {}

  ngOnInit() {

    this.api.getStudentList().subscribe((data)=>{

      this.studentList=data;
    })
  }

}
