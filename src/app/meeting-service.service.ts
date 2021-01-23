import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { threadId } from 'worker_threads';
import Meeting from './Models/Meeting';

@Injectable({
  providedIn: 'root'
})
export class MeetingServiceService {
  
  public meetings: Meeting[] = [
     new Meeting('party','mosratyah',new Date(2021,5,5),new Date(2021,5,6)),
     new Meeting('party','fondog',new Date(2021,5,5),new Date(2021,5,6)),
     new Meeting('party','touta',new Date(2021,5,5),new Date(2021,5,6)),
     new Meeting('party','grombalia',new Date(2021,5,5),new Date(2021,5,6)),
     new Meeting('party','mosratyah',new Date(2021,5,5),new Date(2021,5,6)),
    
  ];

  public subject = new BehaviorSubject(this.meetings);



  constructor() { 
    this.subject.next(this.meetings)
  }


/*   createMeeting(id: number, titre: string, date_debut: Date, date_fin: Date, lieu: string) {
    return new Meeting(id, titre, lieu, date_debut, date_fin);
  } */
  getMeetings() {
    return this.subject;

  }
  getMeeting(indice: number) {
    return this.meetings[indice];
  }

  addMeeting(meeting: Meeting) {
    this.meetings.unshift(meeting);
    this.subject.next(this.meetings)
  }


  editMeeting(indice: number, meeting: Meeting) {
    this.meetings[indice] = meeting;
    this.subject.next(this.meetings)
  }


  deleteMeeting(indice: number) {
    this.meetings = this.meetings.filter((m) => m.id != indice);
    this.subject.next(this.meetings)
  }
}
