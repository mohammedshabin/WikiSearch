import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class wikiservice {

  constructor(private httpClient : HttpClient) { }

  getsearcheddata(name:string){
    return  this.httpClient.get('https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&origin=*&srsearch='+name);
  }
}
