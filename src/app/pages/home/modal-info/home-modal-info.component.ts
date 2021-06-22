import { Component, Input, OnInit } from '@angular/core';

import { EventsSchedule } from './../home.model';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-home-modal-info',
  templateUrl: './home-modal-info.component.html',
  styleUrls: ['./home-modal-info.component.scss'],
})
export class HomeModalInfoComponent implements OnInit {
  @Input() contents: EventsSchedule[] = [];

  constructor(private modal: NzModalRef) {}

  ngOnInit(): void {}

  onRemove(data: any): void {
    const { id } = data;
    this.modal.destroy({ id });
  }
}
