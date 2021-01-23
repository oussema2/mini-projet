import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MeetingServiceService } from '../meeting-service.service';
import Meeting from '../Models/Meeting';

@Component({
  selector: 'app-add-meeting',
  templateUrl: './add-meeting.component.html',
  styleUrls: ['./add-meeting.component.css']
})
export class AddMeetingComponent implements OnInit {

  public titre: string;
  public lieu: string;
  public dateDebut: Date;
  public dateFin: Date;

  @Input() index: number;

  constructor(private service: MeetingServiceService, private router: Router) { }

  ngOnInit(): void {
    if (typeof this.index == 'number') {
      const data = this.service.subject.value[this.index];
      this.titre = data.titre;
      this.lieu = data.lieu;
      this.dateDebut = new Date(data.date_debut);
      this.dateFin = new Date(data.date_fin);

    }

  }

  onAddMeeting() {
    const meeting = new Meeting(this.titre, this.lieu, this.dateDebut, this.dateFin);
    if (typeof this.index == 'number') {
      this.service.editMeeting(this.index ,meeting);
    } else {
      this.service.addMeeting(meeting);
    }
    this.router.navigate(['/']);


  }

}
