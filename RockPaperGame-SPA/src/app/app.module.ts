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
   MatToolbarModule,
   MatFormFieldModule,
   MatInputModule
} from '@angular/material';

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
      AppRoutingModule,
      MatFormFieldModule,
      MatInputModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
