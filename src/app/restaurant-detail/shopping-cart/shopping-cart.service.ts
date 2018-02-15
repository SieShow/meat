import { CartItem } from './cart-item.model';
import { MenuItem } from '../menu-item/menu-item.model';

export class ShoppingCartService {
  items: CartItem[] = [];

  clear() {
    this.items = [];
  }

  addItem(item: MenuItem) {
    let foundItem = this.items.find((mtitem) => mtitem.menuItem.id === item.id);
    if (foundItem) {
      this.increaseQtd(foundItem);
    } else {
      this.items.push(new CartItem(item))
    }
  }

  removerItem(item: CartItem) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  total(): number {
    return this.items.map(item => item.value()).reduce((prev, value) => prev + value, 0);
  }

  increaseQtd(item: CartItem) {
    item.quantity = item.quantity + 1;
  }

  decreaseQtd(item: CartItem) {
    item.quantity = item.quantity - 1;
    if (item.quantity === 0) {
      this.removerItem(item);
    }
  }
}
