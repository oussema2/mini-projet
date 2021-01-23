import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MeetingServiceService } from '../meeting-service.service';
import Meeting from '../Models/Meeting';

@Component({
  selector: 'app-list-meetings',
  templateUrl: './list-meetings.component.html',
  styleUrls: ['./list-meetings.component.css']
})
export class ListMeetingsComponent implements OnInit {
  public meetings : Meeting[]=[];

  ondisplayAdd: boolean = false ;
  ondisplaylist : boolean = true ;
  buttonText = "Create Meeting"


  constructor(private service : MeetingServiceService, private router : Router , private route : ActivatedRoute ) {    
  }

  ngOnInit(): void {
    this.service.subject.subscribe(
      (meetings : Meeting[]) => {
        this.meetings = meetings;
    });

  }

  addMeeting() {

  }
  onAddMeeting() {
   this.ondisplayAdd = !this.ondisplayAdd ; 
   this.ondisplaylist = !this.ondisplaylist ;
   this.buttonText = this.ondisplayAdd ? "To Meeting List" : "Create Meeting"
  }
    

}
