import { Component } from '@angular/core';
import {ServiceWithoutDIService} from "../service-without-di.service";

@Component({
  selector: 'app-first-component-without-di',
  templateUrl: './first-component-without-di.component.html',
  styleUrls: ['./first-component-without-di.component.css']
})
export class FirstComponentWithoutDIComponent {

  msg:String="";
  display() {
        let service=new ServiceWithoutDIService();
        this.msg=service.displaywithouDi();
  }
}
