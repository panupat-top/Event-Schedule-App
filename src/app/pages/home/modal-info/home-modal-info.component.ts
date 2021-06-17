import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-modal-info',
  templateUrl: './home-modal-info.component.html',
  styleUrls: ['./home-modal-info.component.scss'],
})
export class HomeModalInfoComponent implements OnInit {
  @Input() contents: any;

  constructor() {}

  ngOnInit(): void {}
}
