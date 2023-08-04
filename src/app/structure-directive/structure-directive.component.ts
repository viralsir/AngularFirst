import { Component } from '@angular/core';
import {Employee} from "../employee";

@Component({
  selector: 'app-structure-directive',
  templateUrl: './structure-directive.component.html',
  styleUrls: ['./structure-directive.component.css']
})
export class StructureDirectiveComponent {

  b1:boolean=false;
  b2:boolean=true;

  caption:string="show";
  showContent:boolean=false;
  //names:Array<string>=new Array()   []
  /*names=["Vimal","Viren","Amit","Raj","Pratik"]
  */
  names:Array<string>=new Array();

  myStyle={"color":"blue"};

  employees:Array<Employee>=new Array<Employee>();

  constructor() {
    this.employees.push(new Employee(1,"raj",34000))
    this.employees.push(new Employee(2,"Amit",35000))
    this.employees.push(new Employee(3,"Vimal",36000))
    this.employees.push(new Employee(4,"Vishal",37000))

  }

  changeValue() {
        this.b1=true;
        this.b2=false;
  }

  toggle() {
      if(!this.showContent)
      {
        this.showContent=true;
        this.caption="hide";
      }
      else
      {
        this.showContent=false;
        this.caption="show";
      }
  }

  addName(inputname: any) {
    this.names.push(inputname.value);
    inputname.value="";
  }
}
