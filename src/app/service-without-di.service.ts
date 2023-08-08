import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceWithoutDIService {

  empid:number=12;
  constructor() { }


  displaywithouDi(){
    return "display without di service is called." + this.empid;
  }

}
