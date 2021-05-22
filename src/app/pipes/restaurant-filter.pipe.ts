import { Pipe, PipeTransform } from '@angular/core';
import { Restaurant } from '../models/Restaurant';

@Pipe({
  name: 'restaurantFilter'
})
export class RestaurantFilterPipe implements PipeTransform {

  // 1 means search by style
  // 0 means search by everything else
  transform(restaurants: Restaurant[], searchWord: string, type: number = 0): Restaurant[] {
    if (!restaurants || !searchWord || searchWord === 'All') {
      return restaurants;
    }
    if (type === 1) {
      return restaurants.filter(res => res.style === searchWord);
    }
    else {
      return restaurants.filter(res =>
        res.name.toLowerCase().search(searchWord.toLowerCase()) > -1 ||
        res.description.toLowerCase().search(searchWord.toLowerCase()) > -1 ||
        res.style.toLowerCase().search(searchWord.toLowerCase()) > -1);
    }
  }
}
