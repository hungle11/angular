import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/products';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  products: IProduct[] = [];
  currentProduct!: IProduct;
  constructor(private productService: ProductService) {
    this.productService.getAll().subscribe({
      next: (data) => {
        this.products = data
      },
      error: (error) => {
        console.log(error.message)
      }
    })
  }
  getProductById(product: IProduct) {
    this.currentProduct = product;
  }
}
