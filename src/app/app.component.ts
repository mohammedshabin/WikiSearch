import { Component } from '@angular/core';
import { wikiservice} from './wikiservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  data:any =[];

 
  constructor(private getinfofromwiki:wikiservice){}
  fetchData(name:string) {
    this.getinfofromwiki.getsearcheddata(name).subscribe((res:any)=>{
      this.data = res;
      this.data=this.data.query.search;
      console.log(this.data);
    });
  }
  title = 'wiki';
}
