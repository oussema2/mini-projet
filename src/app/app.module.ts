import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ListMeetingsComponent } from './list-meetings/list-meetings.component';
import { DetailMeetingComponent } from './detail-meeting/detail-meeting.component';
import { AddMeetingComponent } from './add-meeting/add-meeting.component';
import { EditMeetingComponent } from './edit-meeting/edit-meeting.component';
import { HeadComponent } from './head/head.component';
import { FormsModule } from '@angular/forms';
import { CrudComponent } from './crud/crud.component';
import { AppRouting } from './appRouting';
import { MeetingCardComponent } from './meeting-card/meeting-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ListMeetingsComponent,
    DetailMeetingComponent,
    AddMeetingComponent,
    EditMeetingComponent,
    HeadComponent,
    CrudComponent,
    MeetingCardComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouting,
    BrowserAnimationsModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
