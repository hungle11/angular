import { Component } from '@angular/core';
import { IAccount } from 'src/app/interfaces/account';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent {
  accounts: IAccount[] = [];
  currentProduct!: IAccount;
  constructor(private AuthService: AuthService) {
    this.AuthService.getAll().subscribe({
      next: (data) => {
        this.accounts = data
      },
      error: (error) => {
        console.log(error.message)
      }
    })
  }

  removeItem(id: string) {
    const confirm = window.confirm('Bạn có chắc muón xóa không?');
    if (confirm) {
      this.AuthService.removeProduct(id).subscribe({
        next: (data) => {
          console.log(data)
          console.log('Xoá sẳn phẩm thành công')
          location.reload();
        }
      })
    }
  }
}
