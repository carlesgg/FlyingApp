import { Component, inject, Input, signal } from '@angular/core';
import { Register } from "../account/register/register";
import { AccountService } from '../../core/services/account-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [Register],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  private router = inject(Router);
  protected accountService = inject(AccountService)
  
  protected registerMode = signal(false);

  constructor() {
    // Redirect immediately if user is logged in
    if (this.accountService.currentUser()) {
      this.router.navigate(['/flying']);
    }
  }

  showRegister(value: boolean) {
    this.registerMode.set(value);
  }

  goToFlyingPage() {
    this.router.navigate(['/flying']); // replace '/flying' with your route path
  }

}
