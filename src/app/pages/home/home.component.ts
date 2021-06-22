import { Component, OnInit } from '@angular/core';

import { ApiService } from './../../services/api/api.service';
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

  constructor(private loading: LoadingService, private api: ApiService) { }

  ngOnInit(): void {
    this.loading.show();
    this.listsEvent();
  }

  async listsEvent(): Promise<void> {
    try {
      const lists = await this.api.listsEvent();

      this.events = lists || [];
      this.events = this.events.sort((a: any, b: any) => (a.time < b.time ? -1 : a.time > b.time ? 1 : 0));
      this.eventsInit = this.events;

      this.loading.hide();
    } catch (error) {
      this.events = [];
      this.loading.hide();
    }
  }

  async onCreate(param: EventsSchedule): Promise<void> {
    try {
      this.loading.show();

      const { name, date, time } = param;
      await this.api.addEvent({ name, date, time });
      this.listsEvent();
    } catch (error) {
      console.log(error);
      this.loading.hide();
    }
  }

  async onRemove(id: any): Promise<void> {
    try {
      this.loading.show();

      await this.api.removeEvent(id);
      this.listsEvent();
    } catch (error) {
      console.log(error);
      this.loading.hide();
    }
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
