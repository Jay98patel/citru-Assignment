import { Component, OnInit } from '@angular/core';
import { carsConstant } from './constants/cars.constants';
import { CarList, FilterButtons } from './models/cars.interface';
import { CarService } from './services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
})
export class CarComponent implements OnInit {
  filterButton: FilterButtons[];
  cars: CarList[];
  originalList: CarList[];
  showResetButton: boolean;

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.getFilterButtonList();
    this.getAllCars();
  }

  getFilterButtonList() {
    this.filterButton = carsConstant.filterButtons;
  }

  getOptionForFilterData() {
    const filterBtn: any[] = this.filterButton.map((x) => x.propertyName);

    for (let i = 0; i < filterBtn.length; i++) {
      let arr: any[] = [];
      this.cars.forEach((x: any, index: number) => {
        arr.push({ val: x[filterBtn[i]], isActive: false });
      });
      const uniqueValues = Array.from(new Set(arr.map((item) => item.val)));
      const uniqueObjects = uniqueValues.map((val) => ({
        val,
        isActive: false,
      }));
      this.filterButton[i].value = uniqueObjects as any;
    }
  }

  getAllCars() {
    this.carService.getAllCarList().subscribe(
      (res: CarList[]) => {
        this.cars = res;
        this.originalList = res;
        this.getOptionForFilterData();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  filter(btn: FilterButtons, value: any, index: number) {
    this.showResetButton = true;
    this.cars = this.originalList;
    this.toggleFilterButtons(btn, value);

    this.cars = this.cars.filter((x: any) => x[btn.propertyName] === value.val);
  }

  resetFilter() {
    this.cars = this.originalList;
    this.toggleFilterButtons(null, null, false);
    this.showResetButton = false;
  }

  toggleFilterButtons(
    btn: FilterButtons | null,
    value: any | null,
    isActive: boolean = true
  ) {
    this.filterButton.forEach((xi: FilterButtons, i: number) => {
      debugger
      xi.value.forEach((x, index) => {
        if (btn && value && value.val == x.val) {
          x.isActive = isActive;
        } else {
          x.isActive = false;
        }
      });
    });
  }
}
