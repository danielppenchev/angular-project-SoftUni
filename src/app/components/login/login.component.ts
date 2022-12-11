import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router:Router, private authService: AuthService) {
    this.authService.user = {
      username: 'John',
      email: 'john@abv.bg',
      password: '12345'
    }
    this.router.navigate(['/']);
  }

}
