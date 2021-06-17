import { Component, OnInit } from '@angular/core';

import { EventsSchedule } from './home.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  events: EventsSchedule[] = [];
  eventsInit: EventsSchedule[] = [];

  constructor() {}

  ngOnInit(): void {}

  onCreate(param: EventsSchedule): void {
    const { name, date, time } = param;
    this.events.push({ name, date, time });
    this.eventsInit = this.events;

    console.log(this.eventsInit);
  }

  onSearch(search: string | null | undefined): void {
    if (!search) {
      this.events = this.eventsInit;
    } else {
      const find = this.eventsInit.filter((req: any) => req.name.toLowerCase().indexOf(search.toLowerCase()) > -1);
      this.events = find;
    }
  }
}
