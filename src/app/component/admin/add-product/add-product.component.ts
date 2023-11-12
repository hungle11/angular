import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IProduct } from 'src/app/interfaces/products';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  productForm = this.form.group({
    name: ["", Validators.required],
    price: ["", Validators.required],
    description: ["", Validators.required],
    level: ["", Validators.required],
    bedrooms: ["", Validators.required],
    bathrooms: ["", Validators.required],
    area: ["", Validators.required],
    floor: ["", Validators.required],
    parking: ["", Validators.required],
    imageUrl: ["", Validators.required]
  })
  constructor(
    private form: FormBuilder,
    private productService: ProductService) {
  }
  onHandleSubmit() {
    if (this.productForm.valid) {
      // Lấy giá trị form 
      // gọi service và đẩy dữ liệu lên API
      this.productService.addProduct(this.productForm.value as IProduct).subscribe();
      alert('Add product successfully!')
      window.location.href = "http://localhost:4200/admin/product";
    }
  }
}
