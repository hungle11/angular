import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interfaces/products';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-detail-pro',
  templateUrl: './detail-pro.component.html',
  styleUrls: ['./detail-pro.component.css']
})
export class DetailProComponent {
  product!: IProduct;
  constructor(
    private router: ActivatedRoute,
    private productService: ProductService,

  ) {
    window.scrollTo(0, 0);
    this.router.params.subscribe(({ id }) => {
      this.productService.getProductById(id).subscribe({
        next: (data) => this.product = data,
        error: (err) => console.log(err.message)
      })
    });

  }

}
