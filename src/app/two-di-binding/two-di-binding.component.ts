import { Component } from '@angular/core';

@Component({
  selector: 'app-two-di-binding',
  templateUrl: './two-di-binding.component.html',
  styleUrls: ['./two-di-binding.component.css']
})
export class TwoDiBindingComponent {
 age:number=21;
 salary:number=23000;

 isVote(){
    if(this.age>18)
    {
      return "you are eligable for Vote";
    }
    else{
      return "you are not eligable for Vote";
    }
 }


}
