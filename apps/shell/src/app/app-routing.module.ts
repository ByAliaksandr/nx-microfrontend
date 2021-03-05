import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReactWrapperComponent } from './react-wrapper/react-wrapper.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'mfe1-home',
    loadChildren: () => import('mfe1/Module').then((m) => m.HomeModule),
  },
  { path: 'mfe2-home', component: ReactWrapperComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [[RouterModule.forRoot(routes)], CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
