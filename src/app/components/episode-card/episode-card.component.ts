import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'episode-card',
    templateUrl: './episode-card.component.html',
    styleUrls: ['./episode-card.component.scss'],
    encapsulation: ViewEncapsulation.None,
    standalone: false
})
export class EpisodeCardComponent {
  @Input() Episode: any;
}
