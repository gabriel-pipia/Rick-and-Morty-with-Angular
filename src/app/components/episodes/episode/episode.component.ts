import { HttpClient } from '@angular/common/http';
import { Component, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataShareService } from 'src/app/services/data-share.service';

@Component({
  selector: 'episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EpisodeComponent {
  constructor(private route: ActivatedRoute, private http: HttpClient, private dataShare: DataShareService) { }
  Character__Arr!: any;
  Episode__Info!: any;

  ngOnInit(): void {
    this.route.params.subscribe((data: any) => {
      this.http.get(`https://rickandmortyapi.com/api/episode/${data.id}`).subscribe((episode: any) => {
        this.GetEpisode(episode);
      });
    });
  }

  GetEpisode(episode: any): void {
    let Character__Links = episode.characters;
    let Temp__Arr: any = [];
    for (const link of Character__Links) {
      this.http.get(link).subscribe((character: any) => {
        Temp__Arr.push(character);
      });
    }
    
    this.Character__Arr = Temp__Arr;
    this.Episode__Info = episode;
  }
}
