import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import {
   MatButtonModule,
   MatCheckboxModule,
   MatCardModule,
   MatProgressSpinnerModule,
   MatToolbarModule,
   MatFormFieldModule,
   MatInputModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


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
      MatInputModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
