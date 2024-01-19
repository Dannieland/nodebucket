import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { SecurityService } from '../security.service';

export interface SessionUser {
  empId: number;
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  errorMessage: string;
  sessionUser: SessionUser;
  isLoading: boolean = false;

  signinForm = this.fb.group({
    empId: [null, Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])]
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cookieService: CookieService,
    private securityService: SecurityService,
    private fb: FormBuilder
  ) {
    this.sessionUser = {} as SessionUser; //initialize the sessionUser object
    this.errorMessage = ''; // initialize the errorMessage
  }

  signin() {
    this.isLoading = true; // set isLoading to true
    console.log("signinForm", this.signinForm.value);
    const empId = this.signinForm.controls['empId'].value; //get the empId from the signinForm

    if (!empId || isNaN(parseInt(empId, 10))) {
      this.errorMessage = 'The employee ID is invalid. Please enter a number.'; //set the errorMessage
      this.isLoading = false; // set isLoading to false
      return;
    }
  }


}
