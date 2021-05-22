import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Restaurant } from '../models/Restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private apiUrl = 'http://localhost:5000/restaurants';

  restaurants: Observable<Restaurant[]> = new Observable<Restaurant[]>();

  constructor(private http:HttpClient) {}

  getRestaurants(): Observable<Restaurant[]> {
    this.restaurants = this.http.get<Restaurant[]>(this.apiUrl);
    return this.restaurants;
  }
}
