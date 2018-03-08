import { Restaurant } from './restaurant/restaurant.model'
import { MEAT_API } from '../app.api'
import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import { MenuItem } from '../restaurant-detail/menu-item/menu-item.model'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()
export class RestaurantService {

  constructor(private http: HttpClient) { }

  /**
  * Retorna uma array de restaurantes
  */
  getRestaurants(search?: string): Observable<Restaurant[]> {
    let params: HttpParams
    if (search) {
      params = new HttpParams().set('q', search)
    }
    return this.http.get<Restaurant[]>(`${MEAT_API}/restaurants`, { params: params })
  }

  /**
  * Retorna um restaurante passando um ID como parâmetro
  */
  getRestaurantById(id: string): Observable<Restaurant> {
    return this.http.get<Restaurant>(`${MEAT_API}/restaurants/${id}`)
  }

  getReviewsOfRestaurant(id: string): Observable<any> {
    return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
  }

  menuOfRestaurant(id: string): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(`${MEAT_API}/restaurants/${id}/menu`)
  }

}
