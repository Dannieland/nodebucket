/**
 * Title: security.service.ts
 * Author: Danielle Taplin
 * Date: 1/17/24
 * code provided by Krasso
 */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor(private http: HttpClient) { }

  findEmployeeById(empId: number) {
    return this.http.get('/api/employees/' + empId);
  }
}