import { Restaurant } from './restaurant/restaurant.model'
import { MEAT_API } from '../app.api'
import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { ErrorHandle } from '../app.error-handle'
import { MenuItem } from '../restaurant-detail/menu-item/menu-item.model'

@Injectable()
export class RestaurantService {

  constructor(private http: Http) { }

  /**
  * Retorna uma array de restaurantes
  */
  getRestaurants(): Observable<Restaurant[]> {
    return this.http.get(`${MEAT_API}/restaurants`)
      .map(response => response.json())
      .catch(ErrorHandle.handleError)
  }

  /**
  * Retorna um restaurante passando um ID como parâmetro
  */
  getRestaurantById(id: string): Observable<Restaurant> {
    return this.http.get(`${MEAT_API}/restaurants/${id}`)
      .map(response => response.json())
      .catch(ErrorHandle.handleError)
  }

  getReviewsOfRestaurant(id: string): Observable<any> {
    return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
      .map(response => response.json())
      .catch(ErrorHandle.handleError)
  }

  menuOfRestaurant(id: string): Observable<MenuItem[]> {
    return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
      .map(response => response.json())
      .catch(ErrorHandle.handleError)
  }

}
