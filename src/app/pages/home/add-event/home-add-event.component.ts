import * as moment from 'moment';

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home-add-event',
  templateUrl: './home-add-event.component.html',
  styleUrls: ['./home-add-event.component.scss'],
})
export class HomeAddEventComponent implements OnInit {
  @Output() create: EventEmitter<any> = new EventEmitter();

  nowDate = moment().format();
  nowTime = moment('00:00:00', 'HH:mm:ss').format();

  formValidate: FormGroup = this.formBuild.group({
    name: [null, Validators.compose([Validators.required])],
    date: [this.nowDate, Validators.compose([Validators.required])],
    time: [this.nowTime, Validators.compose([Validators.required])],
  });

  constructor(private formBuild: FormBuilder) {}

  ngOnInit(): void {}

  onCreate(): void {
    const { name, date, time } = this.formValidate.value;
    const format = (req: any, res: any): string => moment(req).format(res);

    this.create.emit({ name, date: format(date, 'YYYY-MM-DD'), time: format(time, 'HH:mm:ss') });
  }
}
