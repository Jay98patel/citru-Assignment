import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CarList } from '../models/cars.interface';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CarService {
  baseURL: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getAllCarList(): Observable<CarList[]> {
    return this.http.get<CarList[]>(`${this.baseURL}/CarList`);
  }
}
