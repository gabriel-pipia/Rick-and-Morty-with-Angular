import { DataShareService } from './../../../services/data-share.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CharacterComponent {
  constructor(private route: ActivatedRoute, private http: HttpClient, private dataShare: DataShareService) { }
  Alter__Arr!: any;
  Character__Info!: any;

  ngOnInit(): void {
    this.route.params.subscribe((data: any) => {
      this.http.get(`https://rickandmortyapi.com/api/character/${data.id}`).subscribe((Characters: any) => {
        this.GetCharacterAlters(Characters);
      });
    });
  }

  GetCharacterAlters(character: any): void {
    this.Character__Info = character;
    let index = character.name.indexOf(" ");
    let name = index != -1 ? character.name.substring(0, index) : character.name;
    this.http.get(`https://rickandmortyapi.com/api/character/?name=${name}&status=${character.status}`).subscribe((alters: any) => {
      this.Alter__Arr = alters.results;
    });
  }
}
