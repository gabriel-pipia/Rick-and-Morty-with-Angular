import { MainComponent } from './components/main/main.component';
import { CharacterComponent } from './components/characters/character/character.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './components/characters/characters.component';
import { EpisodesComponent } from './components/episodes/episodes.component';
import { EpisodeComponent } from './components/episodes/episode/episode.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'characters/character/:id', component: CharacterComponent },
  { path: 'episodes', component: EpisodesComponent },
  { path: 'episodes/episode/:id', component: EpisodeComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
