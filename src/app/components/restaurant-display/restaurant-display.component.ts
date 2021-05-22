import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from '../../models/Restaurant';


@Component({
  selector: 'app-restaurant-display',
  templateUrl: './restaurant-display.component.html',
  styleUrls: ['./restaurant-display.component.css']
})
export class RestaurantDisplayComponent implements OnInit {

  @Input() restaurant: Restaurant = {
    id: 0,
    name: '',
    style: '',
    description: ''
  }

  imgLink: string = '';

  constructor() { }

  ngOnInit(): void {
    var id = this.restaurant.id;
    this.imgLink = `../../assets/restaurants/${id}/${id}.jpg`
  }
}
