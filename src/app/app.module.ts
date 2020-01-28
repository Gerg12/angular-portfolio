import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroSliderComponent } from './hero-slider/hero-slider.component';
import { HttpModule } from '@angular/http';
import { CardsComponent } from './cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroSliderComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
