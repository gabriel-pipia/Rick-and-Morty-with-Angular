import { HttpClient } from '@angular/common/http';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-characters',
    templateUrl: './characters.component.html',
    styleUrls: ['./characters.component.scss'],
    encapsulation: ViewEncapsulation.None,
    standalone: false
})
export class CharactersComponent {
  constructor(private Http: HttpClient) { }
  
  // Data
  Character__Arr: any[] = [];
  Filtered__Characters: any[] = [];
  
  // Pagination
  ItemSize: number = 20;
  Page: number = 1;
  TotalCharacters: number = 0;
  
  // Filters
  SearchQuery: string = '';
  SelectedStatus: string = 'all';
  SelectedGender: string = 'all';
  SelectedSpecies: string = 'all';
  
  // Filter options
  StatusOptions: string[] = ['Alive', 'Dead', 'unknown'];
  GenderOptions: string[] = ['Male', 'Female', 'Genderless', 'unknown'];
  SpeciesOptions: string[] = ['Human', 'Alien', 'Humanoid', 'Robot', 'Animal', 'Mythological Creature', 'Poopybutthole', 'Cronenberg', 'Disease', 'unknown'];
  
  // Loading state
  IsLoading: boolean = false;
  NotFound: boolean = false;

  ngOnInit(): void {
    this.FetchCharacters();
  }

  FetchCharacters(): void {
    this.IsLoading = true;
    this.NotFound = false;
    
    // Build query params
    let url = 'https://rickandmortyapi.com/api/character/?';
    const params: string[] = [];
    
    params.push(`page=${this.Page}`);
    
    if (this.SearchQuery.trim()) {
      params.push(`name=${encodeURIComponent(this.SearchQuery.trim())}`);
    }
    
    if (this.SelectedStatus !== 'all') {
      params.push(`status=${this.SelectedStatus}`);
    }
    
    if (this.SelectedGender !== 'all') {
      params.push(`gender=${this.SelectedGender}`);
    }
    
    if (this.SelectedSpecies !== 'all') {
      params.push(`species=${encodeURIComponent(this.SelectedSpecies)}`);
    }
    
    url += params.join('&');
    
    this.Http.get(url).subscribe({
      next: (data: any) => {
        this.TotalCharacters = data.info.count;
        this.Filtered__Characters = data.results;
        this.IsLoading = false;
        this.NotFound = false;
      },
      error: (err) => {
        this.Filtered__Characters = [];
        this.TotalCharacters = 0;
        this.IsLoading = false;
        this.NotFound = true;
      }
    });
  }

  OnSearchChange(): void {
    this.Page = 1;
    this.FetchCharacters();
  }

  OnStatusChange(status: string): void {
    this.SelectedStatus = status;
    this.Page = 1;
    this.FetchCharacters();
  }

  OnGenderChange(gender: string): void {
    this.SelectedGender = gender;
    this.Page = 1;
    this.FetchCharacters();
  }

  OnSpeciesChange(event: Event): void {
    const select = event.target as HTMLSelectElement;
    this.SelectedSpecies = select.value;
    this.Page = 1;
    this.FetchCharacters();
  }

  ClearFilters(): void {
    this.SearchQuery = '';
    this.SelectedStatus = 'all';
    this.SelectedGender = 'all';
    this.SelectedSpecies = 'all';
    this.Page = 1;
    this.FetchCharacters();
  }

  HasActiveFilters(): boolean {
    return this.SearchQuery.trim() !== '' || 
           this.SelectedStatus !== 'all' || 
           this.SelectedGender !== 'all' || 
           this.SelectedSpecies !== 'all';
  }

  PageChange(e: any): void {
    this.Page = e;
    this.FetchCharacters();
  }
}
