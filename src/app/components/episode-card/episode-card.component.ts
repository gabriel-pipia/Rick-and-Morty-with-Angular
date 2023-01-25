import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'episode-card',
  templateUrl: './episode-card.component.html',
  styleUrls: ['./episode-card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EpisodeCardComponent {
  @Input() Episode: any;
}
