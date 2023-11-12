import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/products';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
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
  
  removeItem(id: string) {
    const confirm = window.confirm('Bạn có chắc muón xóa không?');
    if (confirm) {
      this.productService.removeProduct(id).subscribe({
        next: (data) => {
          console.log(data)
          console.log('Xoá sẳn phẩm thành công')
          location.reload();
        }
      })
    }
  }


  updateProduct(product: IProduct) {
    console.log(product);
    this.currentProduct = product;
  }
  onHandlerRemove(id: any) {
    console.log(id);
  }
}
