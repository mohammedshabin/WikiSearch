import { Component,Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-finaldisplay',
  templateUrl: './finaldisplay.component.html',
  styleUrls: ['./finaldisplay.component.css']
})
export class finaldisplayComponent implements OnInit {


  @Input() data=null;

  ngOnInit(): void {
  }

}
