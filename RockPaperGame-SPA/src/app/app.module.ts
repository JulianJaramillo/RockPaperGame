import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
   MatButtonModule,
   MatCheckboxModule,
   MatCardModule,
   MatProgressSpinnerModule,
   MatToolbarModule
} from '@angular/material';
import { GameComponent } from './game/game.component';
import { HomeComponent } from './home/home.component';

@NgModule({
   declarations: [
      AppComponent,
      routingComponents
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      MatToolbarModule,
      MatCardModule,
      MatProgressSpinnerModule,
      MatButtonModule,
      MatCheckboxModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
