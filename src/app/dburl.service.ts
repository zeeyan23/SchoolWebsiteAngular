import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DburlService {

  constructor() { }

  url = 'http://127.0.0.1:8000/school';
  // url = 'https://frozen-savannah-71231.herokuapp.com/school';
}
