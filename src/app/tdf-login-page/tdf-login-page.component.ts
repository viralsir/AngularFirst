import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-tdf-login-page',
  templateUrl: './tdf-login-page.component.html',
  styleUrls: ['./tdf-login-page.component.css']
})
export class TdfLoginPageComponent {

  msg:string="";
  userinfo=[{"username":"admin","password":"123"},
    {"username":"amit","password":"345"}]
  checkuser(loginRef:NgForm){
    console.log(loginRef.value);
    let logindata=loginRef.value;

    // for (const users of this.userinfo) {
    //
    //   if(logindata.username==users.username && logindata.password==users.password)
    //   {
    //     this.msg="wel come "+logindata.username;
    //     break;
    //   }
    //   else{
    //     this.msg="username or password is wrong."
    //   }
    //
    //
    // }

    let answer=this.userinfo.find(users=>(logindata.username==users.username && logindata.password==users.password))
    console.log("answer :",answer);
    if(answer==undefined)
        this.msg="username or password is wrong "
    else
       this.msg="wel come "+ answer.username

    loginRef.reset();
  }

}
