/*
task.service.ts
Danielle Taplin
1/24/24
*/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  //getTasks
  getTasks(empId: number) {
    return this.http.get('/api/employees/' + empId + '/tasks'); //http:localhost:3000/api/employees/1/tasks
  }

  //createTask
  addTask(empId: number, text: string) {
    return this.http.post('/api/employees/' + empId + '/tasks', { text}); //http:localhost:3000/api/employees/1/tasks
  }
}