import { DataShareService } from './../../../services/data-share.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-character',
    templateUrl: './character.component.html',
    styleUrls: ['./character.component.scss'],
    encapsulation: ViewEncapsulation.None,
    standalone: false
})
export class CharacterComponent {
  constructor(
    private route: ActivatedRoute, 
    private http: HttpClient, 
    private dataShare: DataShareService
  ) { }
  
  Character__Info: any = null;
  Episodes__Arr: any[] = [];
  Alter__Arr: any[] = [];
  IsLoading: boolean = true;

  ngOnInit(): void {
    this.route.params.subscribe((data: any) => {
      this.IsLoading = true;
      this.http.get(`https://rickandmortyapi.com/api/character/${data.id}`).subscribe((character: any) => {
        this.Character__Info = character;
        this.IsLoading = false;
        this.GetEpisodes(character.episode);
        this.GetRelatedCharacters(character);
      });
    });
  }

  GetEpisodes(episodeUrls: string[]): void {
    // Get first 5 episodes
    const episodesToFetch = episodeUrls.slice(0, 5);
    
    Promise.all(
      episodesToFetch.map(url => this.http.get(url).toPromise())
    ).then((episodes: any[]) => {
      this.Episodes__Arr = episodes;
    });
  }

  GetRelatedCharacters(character: any): void {
    // Get first name for searching related characters
    const firstName = character.name.split(' ')[0];
    
    this.http.get(`https://rickandmortyapi.com/api/character/?name=${firstName}`).subscribe({
      next: (data: any) => {
        // Filter out the current character and limit to 4
        this.Alter__Arr = data.results
          .filter((c: any) => c.id !== character.id)
          .slice(0, 4);
      },
      error: () => {
        this.Alter__Arr = [];
      }
    });
  }

  GetEpisodeNumber(episodeCode: string): string {
    // Extract episode number from code like "S01E01"
    return episodeCode;
  }
}
