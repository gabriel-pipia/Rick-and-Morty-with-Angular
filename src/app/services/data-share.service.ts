import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {

  constructor(private http: HttpClient) { }
  @Output() Server__Emitter: EventEmitter<any> = new EventEmitter();
  @Output() Slider__Emitter: EventEmitter<any> = new EventEmitter();
  @Output() Aside__Emitter: EventEmitter<any> = new EventEmitter();

  GetCharacterData(): Observable<any> {
    return this.http.get("https://rickandmortyapi.com/api/character");
  }
}
