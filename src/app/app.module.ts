import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CardComponent } from './components/card/card.component';
import { CharactersComponent } from './components/characters/characters.component';
import { CharacterComponent } from './components/characters/character/character.component';
import { SliderComponent } from './components/slider/slider.component';
import { EpisodesComponent } from './components/episodes/episodes.component';
import { EpisodeComponent } from './components/episodes/episode/episode.component';
import { EpisodeCardComponent } from './components/episode-card/episode-card.component';
import { AsideComponent } from './components/aside/aside.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    PageNotFoundComponent,
    CardComponent,
    CharactersComponent,
    SliderComponent,
    CharacterComponent,
    EpisodesComponent,
    EpisodeComponent,
    EpisodeCardComponent,
    AsideComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
