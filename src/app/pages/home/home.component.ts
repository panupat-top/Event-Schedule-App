import { Component, OnInit } from '@angular/core';

import { EventsSchedule } from './home.model';
import { LoadingService } from './../../services/loading/loading.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  events: EventsSchedule[] = [];
  eventsInit: EventsSchedule[] = [];

  constructor(private loading: LoadingService) {}

  ngOnInit(): void {}

  async onCreate(param: EventsSchedule): Promise<void> {
    this.loading.show();

    this.events.push({ ...param });
    this.events = this.events.sort((a: any, b: any) => (a.time < b.time ? -1 : a.time > b.time ? 1 : 0));
    this.eventsInit = this.events;

    this.loading.hide();
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
