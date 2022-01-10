import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './modules/fragments/header/header.component';
import { FooterComponent } from './modules/fragments/footer/footer.component';
import { NavbarComponent } from './modules/fragments/navbar/navbar.component';
import { HomeComponent } from './modules/pages/home/home.component';
import { StatisticsComponent } from './modules/pages/statistics/statistics.component';
import { HttpClientModule } from '@angular/common/http';
import { SideBarComponent } from './modules/fragments/side-bar/side-bar.component';
import { ContactComponent } from './modules/pages/contact/contact.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    StatisticsComponent,
    SideBarComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
