import { Component, HostBinding, OnInit, Input } from '@angular/core';
import { CarList } from '../../models/cars.interface';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss'],
})
export class CarListComponent implements OnInit {
  @HostBinding('class') classes = 'h-100 overflow-auto';

  @Input() carList: CarList[];

  constructor() {}

  ngOnInit(): void {}
}
