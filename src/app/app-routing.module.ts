import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { BuyComponent } from './buy/buy.component';
import { ContactComponent } from './contact/contact.component';
import { DevelopmentComponent } from './development/development.component';
import { DivineComponent } from './divine/divine.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { NgModule } from '@angular/core';
import { RentComponent } from './rent/rent.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'development', component: DevelopmentComponent},
  {path: 'rent', component: RentComponent},
  {path: 'buy', component: BuyComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'news', component: NewsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'divine', component:DivineComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
