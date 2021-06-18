import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  spinnerOption = {
    type: 'ball-clip-rotate',
    text: 'กำลังโหลด...',
    size: 'medium',
    color: '#EB088B',
    bg: 'rgba(51,51,51,0.4)',
  };
}
