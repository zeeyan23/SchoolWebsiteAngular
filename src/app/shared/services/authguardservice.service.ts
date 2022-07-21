import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthguardserviceService {

  constructor() { }

  isLoggedIn(): boolean {
    return false;
  }
}
