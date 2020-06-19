import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MoviecardComponent} from './moviecard/moviecard.component';
import {SearchbarComponent} from './searchbar/searchbar.component';
import {SidenavComponent} from './sidenav/sidenav.component';
import {FavlistComponent} from './favlist/favlist.component';
import {InfoComponent} from './info/info.component';

const routes: Routes = [
  { path: '',   redirectTo: '/search', pathMatch: 'full' },
  {path: 'search', component: SearchbarComponent},
  {path: 'favourite', component: FavlistComponent},
  {path: 'info', component: InfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
