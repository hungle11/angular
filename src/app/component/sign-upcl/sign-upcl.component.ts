import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IAccount } from 'src/app/interfaces/account';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-upcl',
  templateUrl: './sign-upcl.component.html',
  styleUrls: ['./sign-upcl.component.css']
})
export class SignUpclComponent {
  formSignup = this.formBuilder.group({
    name: [''],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.minLength(6), Validators.required]],
    confirmPassword: ['', [Validators.required]]
  }, { validators: this.checkPassword })
  constructor(
    private formBuilder: FormBuilder,
    private AuthService: AuthService) {
  }

  checkPassword(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    if (password === confirmPassword) return null;
    return { notMatch: true };
  }

  onSubmit() {
    if (this.formSignup.valid) {
      this.AuthService.addAccount(this.formSignup.value as IAccount).subscribe();
      alert('Add Account successfully!')
      window.location.href = "http://localhost:4200/"
    }
  }
}
