import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { IUserRegister } from 'src/app/shared/interfaces/IUserRegister';
import { User } from 'src/app/shared/models/User';
import { PasswordsMatchValidators } from 'src/app/shared/validators/password_match_validator';

@Component({
  selector: 'profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.css']
})
export class ProfileEditComponent implements OnInit {
  editForm!: FormGroup;
  isSubmitted = false;
  user!: User;

  returnUrl = '';
  
  constructor(private formBuilder: FormBuilder, private userService: UserService, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.user = this.userService.currentUser;
    this.editForm = this.formBuilder.group({
      name: [this.user.name, [Validators.required, Validators.minLength(5)]],
      email: [this.user.email, [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      confirmPassword: ['', Validators.required],
      address: [this.user.address, [Validators.required, Validators.minLength(10)]],
    }, {
      validators: PasswordsMatchValidators('password', 'confirmPassword')
    })

    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl;
  }

  get fc() {
    return this.editForm.controls;
  }

  submit() {
    this.isSubmitted = true;
    if (this.editForm.invalid) {
      return;
    } else {
      const fv = this.editForm.value;
      const user: IUserRegister = {
        name: fv.name,
        email: fv.email,
        password: fv.password,
        confirmPassword: fv.confirmPassword,
        address: fv.address
      };

      this.userService.updateUser(user).subscribe(_ => {
        this.router.navigateByUrl(this.returnUrl);
      })
    }
  }
}
