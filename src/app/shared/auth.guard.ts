/**
 * Title: auth.guard.ts
 * Author: Danielle Taplin
 * Date: 1/17/24
 * code provided by Krasso
 */
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

export const authGuard: CanActivateFn = (route, state) => {
  const cookie = inject(CookieService) //inject CookieService

  if(cookie.get('session_user')) {
    console.log('You are logged in and have a valid session cookie set!')
    return true
  } else {
    console.log('You must be logged in to access this page!')

    const router = inject(Router)
    router .navigate(['/security/signin'], { queryParams: { returnURL: state.url}})
    return false //return false
  }
};
