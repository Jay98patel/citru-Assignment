import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './car.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'carList',
    pathMatch: 'full',
  },
  {
    path: 'carList',
    component: CarComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarRoutingModule {}
