import { Component } from '@angular/core';

@Component({
  selector: 'app-string-intropolation',
  templateUrl: './string-intropolation.component.html',
  styleUrls: ['./string-intropolation.component.css']
})
export class StringIntropolationComponent {


  name:string="Viren";
  age:number=15;
  salary:number=15000

  math:number=50;
  sci:number=30;
  eng:number=40;
  isdisabled:boolean=false;
  colorp:string="color:blue"


  constructor() {

  }


}
