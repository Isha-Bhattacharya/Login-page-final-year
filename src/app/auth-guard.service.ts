import { Injectable } from '@angular/core';
import {  CanActivate,ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthenticationService, private router: Router) {}

  canActivate( 
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): 
    boolean{
    if (!this.auth.isLoggedIn()) {
      this.router.navigateByUrl('/login');
      //this.auth.deleteToken();
      return false;
    }
    return true;
  }
}
