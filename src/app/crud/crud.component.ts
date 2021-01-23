import { Component, OnInit } from '@angular/core';
import { MeetingServiceService } from '../meeting-service.service';
import Meeting from '../Models/Meeting';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  public meetings: Meeting[] = [];
  public displayForm : boolean = false ;
  public id :number ;

  constructor(private service: MeetingServiceService) { }

  ngOnInit(): void {
    this.service.subject.subscribe(
      (meetings : Meeting[]) => {
        this.meetings = meetings;
    });

  }

  onDelete(id : number) {
    this.service.deleteMeeting(id);
  }

  ondisplayForm(id : number) {
    this.displayForm = true ;
    this.id = id ;

  }

}
