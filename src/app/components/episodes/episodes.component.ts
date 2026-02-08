import { HttpClient } from '@angular/common/http';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'episodes',
    templateUrl: './episodes.component.html',
    styleUrls: ['./episodes.component.scss'],
    encapsulation: ViewEncapsulation.None,
    standalone: false
})
export class EpisodesComponent {
  constructor(private Http: HttpClient) { }
  
  Episode__Arr: any = [];
  Filtered__Episodes: any = [];
  ItemSize: number = 10;
  Page: number = 1;
  PageCount: number = 1;
  
  // Filter properties
  SearchQuery: string = '';
  SelectedSeason: string = 'all';
  Seasons: string[] = ['S01', 'S02', 'S03', 'S04', 'S05'];

  ngOnInit(): void {
    this.GetAllEpisodes();
  }

  GetAllEpisodes() {
    // Fetch all episodes (API has 3 pages)
    const allEpisodes: any[] = [];
    const pages = [1, 2, 3];
    
    Promise.all(
      pages.map(page => 
        this.Http.get(`https://rickandmortyapi.com/api/episode/?page=${page}`).toPromise()
      )
    ).then((results: any[]) => {
      results.forEach((data: any) => {
        allEpisodes.push(...data.results);
      });
      this.Episode__Arr = allEpisodes;
      this.ApplyFilters();
    });
  }

  ApplyFilters(): void {
    let filtered = [...this.Episode__Arr];

    // Filter by search query (episode name)
    if (this.SearchQuery.trim()) {
      const query = this.SearchQuery.toLowerCase().trim();
      filtered = filtered.filter((ep: any) => 
        ep.name.toLowerCase().includes(query) || 
        ep.episode.toLowerCase().includes(query)
      );
    }

    // Filter by season
    if (this.SelectedSeason !== 'all') {
      filtered = filtered.filter((ep: any) => 
        ep.episode.startsWith(this.SelectedSeason)
      );
    }

    this.Filtered__Episodes = filtered;
    this.PageCount = Math.ceil(this.Filtered__Episodes.length / this.ItemSize);
    this.Page = 1;
  }

  OnSearchChange(): void {
    this.ApplyFilters();
  }

  OnSeasonChange(season: string): void {
    this.SelectedSeason = season;
    this.ApplyFilters();
  }

  ClearFilters(): void {
    this.SearchQuery = '';
    this.SelectedSeason = 'all';
    this.ApplyFilters();
  }

  PageChange(e: any): void {
    this.Page = e;
  }
}
