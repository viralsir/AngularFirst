import { Component } from '@angular/core';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {

  msg:String="";
  mathserror:string="";
  scienceerror:string="";

  savebtndisabled=false;

  save(rno:any,name:any)
  {

     rno.style.backgroundColor='red';
     rno.disabled=true;
     this.msg=`Roll No:${rno.value}, Name :${name.value}`;
    //this.msg=rno;

  }


  validate_mark(mark:any,option:number,disablecomponent:any)
  {
    mark=mark.value;
    if(mark<0 || mark>100)
    {
       if(option==0)
       {
         this.mathserror="invalid marks must be between (0-100)";
       }
       else
       {
        this.scienceerror="invalid marks must be between (0-100)";
       }
       disablecomponent.disabled=true;
    }
    else
    {
      if(option==0)
      {
        this.mathserror="";
      }
      else
      {
        this.scienceerror="";
      }

    }
    disablecomponent.disabled=true;
  }


  checkmarks(maths:any,science:any,option:number)
  {

    ///this.validate_mark(eval(maths.value),option,)


    /*if(maths.value>100 || maths.value<0)
    {
      this.mathserror="invalid marks must be between(0-100)";
      science.disabled=true;
    }
    else
    {
       this.mathserror="";
       science.disabled=false;
    }
    if(science.value>100 || science.value<0)
    {
      this.scienceerror="invalid marks must be between(0-100)";
      this.savebtndisabled=true;
    }
    else
    {
       this.scienceerror="";
       this.savebtndisabled=false;
    }
*/


  }

}
