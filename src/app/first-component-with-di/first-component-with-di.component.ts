import { Component } from '@angular/core';
import {ServiceWithDIService} from "../service-with-di.service";

@Component({
  selector: 'app-first-component-with-di',
  templateUrl: './first-component-with-di.component.html',
  styleUrls: ['./first-component-with-di.component.css']
})
export class FirstComponentWithDIComponent {

  msg:string="";
  constructor(public service:ServiceWithDIService) {
  }

  display()
  {
     this.msg=this.service.displaywithDi();
  }

}
