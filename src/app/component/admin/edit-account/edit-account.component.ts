import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IAccount } from 'src/app/interfaces/account';
import { firstValueFrom } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.component.html',
  styleUrls: ['./edit-account.component.css']
})
export class EditAccountComponent {
  productForm = this.formBuilder.group({
    name: [''],
    email: [''],
    password: [''],
  });
  account!: IAccount;
  constructor(
    private router: ActivatedRoute,
    private AuthService: AuthService,
    private formBuilder: FormBuilder
  ) {
  }

  async ngOnInit() {

    const { id } = this.router.snapshot.params;
    try {
      // call API to get product by id
      this.account = await firstValueFrom(this.AuthService.getAccountById(id));
      // set value for Form
      this.productForm.patchValue(this.account as any);
    } catch (error: any) {
      console.log(error.message)
    }

  }
  async onHandleSubmit() {
    if (this.productForm.invalid) return;

    // call API to update product
    const account: any = { id: this.account.id, ...this.productForm.value };
    await firstValueFrom(this.AuthService.updateAcount(account))
    alert('Update account successfully!')
    window.location.href = "http://localhost:4200/admin/product/account";
  }
}
