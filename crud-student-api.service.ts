import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Students,Subject} from 'src/app/interfaces/studentForm.interface';

@Injectable({
  providedIn: 'root'
})
export class CrudStudentApiService {



  constructor( private Http:HttpClient) { }

  getStudentList(): Observable<Students[]>{

    return this.Http.get<Students[]>(`${environment.Basepath}students`);
  }

  getStudentDetails(id:number): Observable<Students[]>{

    return this.Http.get<Students[]>(`${environment.Basepath}students/${id}`);
  }

  addStudentDetails(student:Students[]): Observable<Students[]>{

    return this.Http.post<Students[]>(`${environment.Basepath}students`,student);
  }

  updateStudentDetails(id:number,student:Students[]): Observable<Students[]>{
    return this.Http.put<Students[]>(`${environment.Basepath}students/${id}`,student);
  }

  deleteStudentDetails(id:number):Observable<Students[]>{

    return this.Http.delete<Students[]>(`${environment.Basepath}students/${id}`);
  }
  
}
