import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurants/restaurants.service'
import { Restaurant } from '../restaurants/restaurant/restaurant.model'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant
  constructor(private restaurantService: RestaurantService, private router: ActivatedRoute) { }

  ngOnInit() {
    this.restaurantService.getRestaurantById(this.router.snapshot.params['id'])
      .subscribe(restaurant => this.restaurant = restaurant)
  }
}
