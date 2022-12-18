import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  user!: User;

  constructor(userService: UserService, private router: Router) {
    this.user = userService.currentUser;
  }

  editProfile() {
    this.router.navigateByUrl('/edit-profile');
  }
}
