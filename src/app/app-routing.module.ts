import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cars',
    pathMatch: 'full',
  },
  {
    path: 'cars',
    loadChildren: () =>
      import('./main/car/car.module').then((m) => m.CarModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
