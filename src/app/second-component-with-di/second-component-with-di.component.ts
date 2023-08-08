import { Component } from '@angular/core';
import {ServiceWithDIService} from "../service-with-di.service";
import {ServiceWithoutDIService} from "../service-without-di.service";

@Component({
  selector: 'app-second-component-with-di',
  templateUrl: './second-component-with-di.component.html',
  styleUrls: ['./second-component-with-di.component.css']
})
export class SecondComponentWithDiComponent {

  msg:string="";
  constructor(public service:ServiceWithDIService,public service1:ServiceWithoutDIService)
  {

  }

   display(){
     this.msg=this.service.displaywithDi();
     this.service1.displaywithouDi();
   }

}
