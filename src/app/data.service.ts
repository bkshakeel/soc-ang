import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './_models/Employee';
import { HttpHeaders,HttpErrorResponse } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private handleError() {

      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        "error");
    
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  constructor(private http: HttpClient) { }

  getUsers() {
    console.log(this.http.get('http://127.0.0.1:8080/employees'))
    return this.http.get('http://127.0.0.1:8080/employees')
  }

  addEmployee (emp: Employee){
    return this.http.post("http://127.0.0.1:8080/employee",{
      "firstName": emp.firstName,
      "lastName": emp.lastName,
      "gender": emp.gender,
      "dob": emp.dob,
      "department": emp.department
    }, httpOptions);
     
  }
}
