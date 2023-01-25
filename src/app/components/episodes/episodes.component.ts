import { HttpClient } from '@angular/common/http';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class EpisodesComponent {
  constructor(private Http: HttpClient) { }
  Episode__Arr: any = [];
  ItemSize: number = 2;
  Page: number = 1;
  PageCount: number = 2;

  ngOnInit(): void {
    this.GetEpisodeData();
  }

  GetEpisodeData() {
    this.Http.get(`https://rickandmortyapi.com/api/episode/?page=${this.Page}`).subscribe((data: any) => {
      this.PageCount = data.info.pages;
      this.Episode__Arr = data.results;
    });
  }

  PageChange(e: any): void {
    this.Page = e;
    this.GetEpisodeData();
  }

  PageSizeChange(e: any): void {
    this.Page = 1;
    this.ItemSize = e;
    this.GetEpisodeData();
  }
}
