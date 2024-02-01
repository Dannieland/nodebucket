/*
task.service.ts
Danielle Taplin
1/24/24
*/
// imports
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Item } from '../shared/item.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }
    
    // calls via http client to the server for retrieving a task
    getTask(empId: number) {
      return this.http.get('/api/employees/' + empId + '/tasks')
    }
    // calls via http client to the server for adding a task
    addTask(empId: number, task: Item) {
      return this.http.post('/api/employees/' + empId + '/tasks', { task })
    }

    // calls via http client to the server for updating a task
    updateTask(empId: number, todo: Item[], done: Item[]) {
      return this.http.put('/api/employees/' + empId + '/tasks', {
        todo,
        done
      })
    }
    
    // calls via http client to the server for deleting a task
    deleteTask(empId: number, taskId: string) {
      return this.http.delete('/api/employees/' + empId + '/tasks/' + taskId)
    }
  }