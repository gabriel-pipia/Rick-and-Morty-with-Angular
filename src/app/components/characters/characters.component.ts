import { HttpClient } from '@angular/common/http';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CharactersComponent {
  constructor(private Http: HttpClient) { }
  Character__Arr: any = [];
  Duplicate__Character__Arr: any = [];
  SearchQuery: String = "";
  NotFound: boolean = false;
  ItemSize: number = 10;
  Page: any = Number(localStorage.getItem("Page")) || 1;
  PageCount: number = 0;

  ngOnInit(): void {
    this.GetCharacterData();
  }

  GetCharacterData() {
    this.Http.get(`https://rickandmortyapi.com/api/character/?page=${this.Page}`).subscribe((data: any) => {
      this.PageCount = data.info.pages;
      this.Character__Arr = data.results;
      this.Duplicate__Character__Arr = this.Character__Arr;
    });
  }

  PageChange(e: any): void {
    this.Page = e;
    this.GetCharacterData();
  }

  PageSizeChange(e: any): void {
    this.Page = 1;
    this.ItemSize = e;
    this.GetCharacterData();
  }

  SearchCharacter() {
    this.Duplicate__Character__Arr = this.Character__Arr.filter((character: any) => character.name.toLowerCase().trim().indexOf(this.SearchQuery.toLowerCase().trim()) != -1);
    this.Duplicate__Character__Arr == "" ? this.NotFound = true : this.NotFound = false;
  }

  Sort(e: any) {
    let Value = e.target.value;
    if (Value.toLowerCase() != "all") {
      this.Duplicate__Character__Arr = this.Character__Arr.filter((character: any) => character.gender.toLowerCase() == Value.toLowerCase());
    } else {
      this.Duplicate__Character__Arr = this.Character__Arr;
    }
  }
}
