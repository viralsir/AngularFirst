import { Component } from '@angular/core';
import {FakeRestServiceService} from "../fake-rest-service.service";
import {FakeModel} from "../fake-model";

@Component({
  selector: 'app-fake-rest-component',
  templateUrl: './fake-rest-component.component.html',
  styleUrls: ['./fake-rest-component.component.css']
})
export class FakeRestComponentComponent {

  fakeJsonData:Array<FakeModel>=[];
  constructor(public fakeService:FakeRestServiceService) {
  }

  displaydata()
  {
       this.fakeService.fakeJsonApi()
         .subscribe(data=>this.fakeJsonData=data,error => console.log(error),()=>console.log("completed"));
  }

}
