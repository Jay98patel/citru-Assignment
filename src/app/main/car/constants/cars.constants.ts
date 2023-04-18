import { FilterButtons } from '../models/cars.interface';

class Cars {
  filterButtons: FilterButtons[] = [
    {
      id: 1,
      filterBy: 'Year',
      color: 'badge bg-primary',
      value: [],
      propertyName: 'year',
    },
    {
      id: 2,
      filterBy: 'Make',
      color: 'badge bg-success',
      value: [],
      propertyName: 'make',
    },
    {
      id: 3,
      filterBy: 'Model',
      color: 'badge bg-warning text-dark',
      value: [],
      propertyName: 'model',
    },
    {
      id: 4,
      filterBy: 'Price',
      color: 'badge bg-info text-dark',
      value: [],
      propertyName: 'price',
    },
  ];
}

export const carsConstant = new Cars();
