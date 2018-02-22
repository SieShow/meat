import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model'

@Component({
  selector: 'mt-order-itens',
  templateUrl: './order-itens.component.html'
})
export class OrderItensComponent implements OnInit {

  @Input() itens: CartItem[]

  @Output() increaseQtd = new EventEmitter<CartItem>()
  @Output() decreaseQtd = new EventEmitter<CartItem>()
  @Output() remove = new EventEmitter<CartItem>()

  constructor() { }

  ngOnInit() {
  }

  emitIncreaseQtd(item: CartItem) {
    this.increaseQtd.emit(item)
  }

  emitDecreaseQtd(item: CartItem) {
    this.decreaseQtd.emit(item)
  }

  emitRemove(item: CartItem) {
    this.remove.emit(item)
  }

}
