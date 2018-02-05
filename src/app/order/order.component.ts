import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/shared/radio/radio-option';
import { OrderService } from 'app/order/order.service';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';
import { Order, OrderItem } from './order.model';
import { Router } from '@angular/router';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})

export class OrderComponent implements OnInit {

  delivery: number = 8;

  paymentOptions: RadioOption[] = [
    { label: 'Dinheiro', value: 'MON' },
    { label: 'Cartão de Débito', value: 'DEB' },
    { label: 'Cartão de Refeição', value: 'REF' }
  ];

  constructor(private orderService: OrderService, private router: Router) { }

  ngOnInit() {
  }

  itensValue(): number {
    return this.orderService.itensValue();
  }

  cartItems(): CartItem[] {
    return this.orderService.cartItems();
  }

  increaseItens(item: CartItem) {
    this.orderService.increaseQtd(item);
  }

  decreaseItens(item: CartItem) {
    this.orderService.decreaseQtd(item);
  }

  remove(item: CartItem) {
    this.orderService.remove(item);
  }

  checkOrder(order: Order) {
    order.orderItens = this.cartItems().map((item: CartItem) => new OrderItem(item.quantity, item.menuItem.id));
    this.orderService.checkOrder(order).subscribe((orderID: string) => {
      this.router.navigate(['/order-sumary']);
      console.log(`Compra concluida: ${orderID}`);
      this.orderService.clear();
    });
    console.log(order);
  }

}
