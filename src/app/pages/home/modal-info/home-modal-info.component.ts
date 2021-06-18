import { Component, Input, OnInit } from '@angular/core';

import { EventsSchedule } from './../home.model';

@Component({
  selector: 'app-home-modal-info',
  templateUrl: './home-modal-info.component.html',
  styleUrls: ['./home-modal-info.component.scss'],
})
export class HomeModalInfoComponent implements OnInit {
  @Input() contents: EventsSchedule[] = [];

  constructor() {}

  ngOnInit(): void {}
}
