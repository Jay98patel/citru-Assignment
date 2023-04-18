export interface FilterButtons {
  id: number;
  filterBy: string;
  color: string;
  value: any[];
  propertyName: string;
}

export interface CarList {
  image: string;
  year: number;
  make: string;
  model: string;
  price: number;
}
