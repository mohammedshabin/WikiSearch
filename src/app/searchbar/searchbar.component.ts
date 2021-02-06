import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class searchbarComponent implements OnInit {


  @Output() searchedName = new EventEmitter<string>();
  name='';
 search(event:any){
    event.preventDefault();
   this.searchedName.emit(this.name);
   console.log(this.searchedName);
  }

 

  ngOnInit(): void {
  }

}
