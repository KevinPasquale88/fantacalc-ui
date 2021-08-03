import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeSelectComponent } from './home-select/home-select.component';
import { PlayerComponent } from './player/player.component';

const routes: Routes = [
  { path: '', component: HomeSelectComponent },
  { path: 'searchplayers', component: HomeSelectComponent },
  { path: 'players/:role', component: PlayerComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
