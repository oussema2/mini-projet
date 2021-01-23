import { Component, Input, OnInit } from '@angular/core';
import Meeting from '../Models/Meeting';

@Component({
  selector: 'app-meeting-card',
  templateUrl: './meeting-card.component.html',
  styleUrls: ['./meeting-card.component.css']
})
export class MeetingCardComponent implements OnInit {
  @Input() index : number ;
  @Input() item : Meeting ;

  constructor() { }

  ngOnInit(): void {
   


  }

}
