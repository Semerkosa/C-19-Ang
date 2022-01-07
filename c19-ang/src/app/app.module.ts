import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/fragments/header/header.component';
import { FooterComponent } from './modules/fragments/footer/footer.component';
import { NavbarComponent } from './modules/fragments/navbar/navbar.component';
import { HomeComponent } from './modules/pages/home/home.component';
import { StatisticsComponent } from './modules/pages/statistics/statistics.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
