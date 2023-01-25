import { DataShareService } from './../../services/data-share.service';
import { Component, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent {
  constructor(private DataShare: DataShareService, private Http: HttpClient) { }
  Character__Arr: any[] = [];
  Duplicate__Character__Arr: any[] = [];
  Slider__Arr: any[] = [];
  RandomNum__Arr: any[] = [];
  SearchQuery: String = "";
  NotFound: boolean = false;

  ngOnInit(): void {
    localStorage.setItem("Page", `1`);
    this.GenerateRandomNumber();
    this.GetCharacterData();
  }

  GenerateRandomNumber(): void {
    this.Slider__Arr = [];
    this.RandomNum__Arr = [];
    while (this.RandomNum__Arr.length != 3) {
      let Num = Math.floor(Math.random() * 20);
      if (this.RandomNum__Arr.indexOf(Num) == -1) {
        this.RandomNum__Arr.push(Num);
      }
    }
  }
  GetCharacterData(): void {
    this.Slider__Arr = [];
    this.DataShare.GetCharacterData().subscribe((data: any) => {
      this.Character__Arr = data.results;
      this.Duplicate__Character__Arr = this.Character__Arr;
      for (let i = 0; i < this.Character__Arr.length; i++) {
        if (this.RandomNum__Arr.indexOf(this.Character__Arr[i].id) != -1) {
          this.Slider__Arr.push(this.Character__Arr[i]);
        }
      }
    });
  }

  SearchCharacter(): void {
    this.Duplicate__Character__Arr = this.Character__Arr.filter((character: any) => character.name.toLowerCase().trim().indexOf(this.SearchQuery.toLowerCase().trim()) != -1);
    this.Duplicate__Character__Arr == [] as any ? this.NotFound = true : this.NotFound = false;
  }

}

