import { Component, OnInit } from '@angular/core';
import * as data from './ticket.json';



@Component({
  selector: 'app-ticketing',
  templateUrl: './ticketing.component.html',
  styleUrls: ['./ticketing.component.css']
})
export class TicketingComponent implements OnInit {
  data: any = (data as any).default;
  constructor() { }

  ngOnInit(): void {
    console.log("sample data" + this.data);
    
    
  }

}
