import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceWithDIService {

  constructor() { }

   displaywithDi(){
    return "servicewith called for display with di";
   }
}
