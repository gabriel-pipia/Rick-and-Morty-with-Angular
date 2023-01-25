import { Component, Input, ViewEncapsulation } from '@angular/core';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CardComponent {
  constructor() { }
  @Input() Character: any;
}
