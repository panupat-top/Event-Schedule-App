import * as moment from 'moment';

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { EventsSchedule } from './../home.model';
import { HomeModalInfoComponent } from './../modal-info/home-modal-info.component';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-home-calendar',
  templateUrl: './home-calendar.component.html',
  styleUrls: ['./home-calendar.component.scss'],
})
export class HomeCalendarComponent implements OnInit {
  @Input() events: EventsSchedule[] = [];
  @Output() search: EventEmitter<any> = new EventEmitter();
  @Output() remove: EventEmitter<any> = new EventEmitter();

  colors = '#375ca9';
  currentDate = moment().format();

  formValidate: FormGroup = this.formBuild.group({
    search: [null, Validators.compose([Validators.required])],
  });

  constructor(private formBuild: FormBuilder, private modal: NzModalService) {}

  ngOnInit(): void {}

  selectCalendarDate(event: Date): void {
    const date = moment(event).format('YYYY-MM-DD');
    const value = this.events.filter((req: EventsSchedule) => req.date === date);

    if (value.length > 0) {
      const showDate = moment(value[0].date, 'YYYY-MM-DD').format('DD MMMM YYYY');
      return this.info(showDate, value);
    }
  }

  info(title: string, contents: EventsSchedule[]): void {
    const modal = this.modal.create({
      nzTitle: title,
      nzContent: HomeModalInfoComponent,
      nzComponentParams: { contents },
      nzOnOk: () => console.log('ok!'),
    });

    modal.afterClose.subscribe(result => {
      const id = result?.id || null;
      if (id) {
        this.remove.emit(id);
      }
    });
  }

  onSearch(): void {
    const { search } = this.formValidate.value;
    this.search.emit(search);
  }

  formatDate(date: any, format: string = 'YYYY-MM-DD'): string {
    return moment(date).format(format);
  }
}
