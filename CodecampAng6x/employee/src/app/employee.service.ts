import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employeesUrl = 'api/employees';  // URL to web api

  constructor(private http: HttpClient) { }

  /** GET employeees from the server */
  get(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeesUrl);
  }

  /** GET employee by id. Will 404 if id not found */
  getById(id: number): Observable<Employee> {
    const url = `${this.employeesUrl}/${id}`;
    return this.http.get<Employee>(url);
  }

  /* GET employeees whose name contains search term */
  search(term: string): Observable<Employee[]> {
    if (!term.trim()) {
      // if not search term, return empty employee array.
      return of([]);
    }
    return this.http.get<Employee[]>(`${this.employeesUrl}/?name=${term}`);
  }

  //////// Save methods //////////

  /** POST: add a new employee to the server */
  add(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.employeesUrl, employee, httpOptions);
  }

  /** DELETE: delete the employee from the server */
  delete(employee: Employee | number): Observable<Employee> {
    const id = typeof employee === 'number' ? employee : employee.id;
    const url = `${this.employeesUrl}/${id}`;

    return this.http.delete<Employee>(url, httpOptions);
  }

  /** PUT: update the employee on the server */
  update(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(this.employeesUrl, employee, httpOptions);
  }

}

export class Employee {
  public id: number;
  public name: string;
  public gender: string;
  public departmentId: number;
  public salary: number;
}
