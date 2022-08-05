import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name: '',
    address: '',
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {}

  clearAllCart(i: any) {
    this.items.splice(i);
    window.alert('Your cart is empty now!');
  }

  clearItem(i: any) {
    this.items.splice(this.items.indexOf(i), 1);
    window.alert('Your product has been deleted to the cart!');
    console.log('DATA:' + i);
  }

  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
    console.log('button submit CLICK');
  }
}
