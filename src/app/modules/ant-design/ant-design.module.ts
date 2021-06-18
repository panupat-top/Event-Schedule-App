import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzTimelineModule } from 'ng-zorro-antd/timeline';

@NgModule({
  declarations: [],
  exports: [
    NzFormModule,
    NzCalendarModule,
    NzDatePickerModule,
    NzTimePickerModule,
    NzInputModule,
    NzButtonModule,
    NzIconModule,
    NzModalModule,
    NzTagModule,
    NzListModule,
    NzTimelineModule,
  ],
  imports: [CommonModule],
})
export class AntDesignModule {}
