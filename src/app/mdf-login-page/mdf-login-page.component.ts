import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-mdf-login-page',
  templateUrl: './mdf-login-page.component.html',
  styleUrls: ['./mdf-login-page.component.css']
})
export class MdfLoginPageComponent {

  loginFormGroup=new FormGroup({
   username:new FormControl("",[Validators.required]),
   pass:new FormControl("",[Validators.required,Validators.minLength(8)])
  })
  msg:string="";
  userinfo =[{"username":"admin","pass":"123"},
             {"username":"vimal","pass":"123"}
            ]

  checkUser(){
    let logindata=this.loginFormGroup.value;

    console.log(logindata);
    console.log(logindata.username);

    let user=this.userinfo.find(element=>(logindata.username==element.username && logindata.pass==element.pass))

    // if(logindata.username=="admin" && logindata.pass=="123")
    // {
    //   this.msg="login Successfully";
    // }
    // else {
    //   this.msg="wrong username or password";
    // }
    if(user!=undefined)
    {
      this.msg="login Successfully";
    }
    else {
      this.msg="wrong username or password";
    }
    this.loginFormGroup.reset();
  }


}
