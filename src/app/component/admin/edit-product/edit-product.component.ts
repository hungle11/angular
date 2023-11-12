import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interfaces/products';
import { ProductService } from 'src/app/services/product.service';
import { firstValueFrom } from 'rxjs';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
  productForm = this.formBuilder.group({
    name: [''],
    price: [0],
    description: [''],
    level: ['Select Level'],
    bedrooms: [0],
    bathrooms: [0],
    area: [0],
    floor: [0],
    parking: [0],
    imageUrl: ['']
  });
  product!: IProduct;
  constructor(
    private router: ActivatedRoute,
    private productService: ProductService,
    private formBuilder: FormBuilder
  ) {
  }

  async ngOnInit() {

    const { id } = this.router.snapshot.params;
    try {
      // call API to get product by id
      this.product = await firstValueFrom(this.productService.getProductById(id));
      // set value for Form
      this.productForm.patchValue(this.product as any);
    } catch (error: any) {
      console.log(error.message)
    }

  }
  async onHandleSubmit() {
    if (this.productForm.invalid) return;

    // call API to update product
    const product: any = { id: this.product.id, ...this.productForm.value };
    await firstValueFrom(this.productService.updateProduct(product))
    alert('Update product successfully!')
    window.location.href = "http://localhost:4200/admin/product";
  }
}
