import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../../models/Restaurant';
import { RestaurantService } from '../../services/restaurant.service';
import { UiService } from '../../services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {

  restaurants: Restaurant[] = [];
  style: string = "All";
  type: number = 0;
  subscription: Subscription = new Subscription();

  constructor(private restaurantService: RestaurantService,
              private uiService: UiService) {}

  ngOnInit(): void {
    this.subscription = this.uiService.getStyle().subscribe((style) => (this.style = style));

    this.restaurantService
      .getRestaurants()
      .subscribe((restaurants) => this.restaurants=restaurants);
  }
}
