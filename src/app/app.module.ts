import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroSliderComponent } from './hero-slider/hero-slider.component';
import { HttpModule } from '@angular/http';
import { CardsComponent } from './cards/cards.component';
import { FooterComponent } from './footer/footer.component';
import { FeaturedWorkComponent } from './featured-work/featured-work.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroSliderComponent,
    CardsComponent,
    FooterComponent,
    FeaturedWorkComponent,
    NavBarComponent
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
