import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarRoutingModule } from './car-routing.module';
import { CarComponent } from './car.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CarService } from './services/car.service';

@NgModule({
  declarations: [CarComponent, CarListComponent],
  imports: [CommonModule, CarRoutingModule, HttpClientModule],
  providers: [CarService],
})
export class CarModule {}
