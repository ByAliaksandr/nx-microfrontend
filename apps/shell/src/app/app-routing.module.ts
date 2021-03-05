import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'mfe1-home', 
  loadChildren: () => import('mfe1/Module').then(m => m.HomeModule)
},
  // { path: 'mfe2-home', component: HomeComponent }
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [[RouterModule.forRoot(routes)], CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
