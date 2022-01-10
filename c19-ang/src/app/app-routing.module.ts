import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './modules/pages/contact/contact.component';
import { HomeComponent } from './modules/pages/home/home.component';
import { StatisticsComponent } from './modules/pages/statistics/statistics.component';

const routes: Routes = [
  {path: '', component: StatisticsComponent},
  {path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
