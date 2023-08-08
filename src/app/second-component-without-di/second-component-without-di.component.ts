import { Component } from '@angular/core';
import {ServiceWithoutDIService} from "../service-without-di.service";

@Component({
  selector: 'app-second-component-without-di',
  templateUrl: './second-component-without-di.component.html',
  styleUrls: ['./second-component-without-di.component.css']
})
export class SecondComponentWithoutDIComponent {

  msg:string="";
  display() {
    let service=new ServiceWithoutDIService();
    this.msg=service.displaywithouDi();
  }
}
