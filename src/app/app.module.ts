import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component'; // standalone
import Marquee from '@tenedev/marquee';
import { MarqueeEffectComponent } from './shared/marquee-effect/marquee-effect.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarComponent, // ✅ standalone component
    MarqueeEffectComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // ✅ imported from @angular/core
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
