import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {FakeModel} from "./fake-model";

/*
      pre define service
      1. always access by DI
      2. DI can only created using Constructor
      3. always put or use pre define service in user define service

      fetch(promise)  then catch     vs observable subscribe
                                            1 parameter   data
                                            2 error       error
                                            3 completed  ()=>{}
 */


@Injectable({
  providedIn: 'root'
})
export class FakeRestServiceService {

  constructor(public httpclient:HttpClient) {

  }

  fakeJsonApi():Observable<FakeModel[]>{

    return this.httpclient.get<FakeModel[]>("https://jsonplaceholder.typicode.com/posts")


  }

}
