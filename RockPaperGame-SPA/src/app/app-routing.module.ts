import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './game/game.component';
import { HomeComponent } from './home/home.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'game/:player1/:player2', component: GameComponent},
  {path: 'home', component: HomeComponent},
  {path: 'results/:winner', component: ResultComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [GameComponent,HomeComponent,ResultComponent]