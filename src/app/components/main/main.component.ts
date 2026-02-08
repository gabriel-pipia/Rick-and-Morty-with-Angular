import { DataShareService } from './../../services/data-share.service';
import { Component, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
    encapsulation: ViewEncapsulation.None,
    standalone: false
})
export class MainComponent {
  @ViewChild('cardTrack') cardTrack!: ElementRef;
  
  constructor(private DataShare: DataShareService, private Http: HttpClient) { }
  
  Character__Arr: any[] = [];
  Duplicate__Character__Arr: any[] = [];
  Slider__Arr: any[] = [];
  RandomNum__Arr: any[] = [];
  SearchQuery: string = "";
  NotFound: boolean = false;

  ngOnInit(): void {
    localStorage.setItem("Page", `1`);
    this.GenerateRandomNumber();
    this.GetCharacterData();
  }

  GenerateRandomNumber(): void {
    this.Slider__Arr = [];
    this.RandomNum__Arr = [];
    // Generate 3 unique random numbers between 1 and 20 (character IDs)
    while (this.RandomNum__Arr.length < 3) {
      let Num = Math.floor(Math.random() * 20) + 1; // IDs start at 1
      if (this.RandomNum__Arr.indexOf(Num) === -1) {
        this.RandomNum__Arr.push(Num);
      }
    }
  }

  GetCharacterData(): void {
    this.DataShare.GetCharacterData().subscribe((data: any) => {
      this.Character__Arr = data.results;
      this.Duplicate__Character__Arr = this.Character__Arr;
      
      // Populate slider with random characters
      this.Slider__Arr = this.Character__Arr.filter((character: any) => 
        this.RandomNum__Arr.includes(character.id)
      );
      
      // Fallback: if no matches, use first 3 characters
      if (this.Slider__Arr.length === 0 && this.Character__Arr.length >= 3) {
        this.Slider__Arr = this.Character__Arr.slice(0, 3);
      }
    });
  }

  SearchCharacter(): void {
    this.Duplicate__Character__Arr = this.Character__Arr.filter((character: any) => 
      character.name.toLowerCase().trim().indexOf(this.SearchQuery.toLowerCase().trim()) != -1
    );
    this.NotFound = this.Duplicate__Character__Arr.length === 0;
  }

  scrollCards(direction: 'left' | 'right'): void {
    if (this.cardTrack) {
      const scrollAmount = 320; // Width of one card + gap
      const currentScroll = this.cardTrack.nativeElement.scrollLeft;
      const newScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      this.cardTrack.nativeElement.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      });
    }
  }
}
