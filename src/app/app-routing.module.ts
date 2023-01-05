import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { LuxuryWatchesComponent } from './components/luxury-watches/luxury-watches.component';
import { MensWatchesComponent } from './components/mens-watches/mens-watches.component';
import { WatchPreviewComponent } from './components/mens-watches/watch-preview/watch-preview.component';
import { WomensWatchesComponent } from './components/womens-watches/womens-watches.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'mens-watches', component: MensWatchesComponent },
  { path: 'womens-watches', component: WomensWatchesComponent },
  { path: 'luxury-watches', component: LuxuryWatchesComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'watch/:id',
    component: WatchPreviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
