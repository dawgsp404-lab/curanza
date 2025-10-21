import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SimpleMarqueeDirectiveDirective } from './simple-marquee-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    SimpleMarqueeDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
