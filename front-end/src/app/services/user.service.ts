import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { USER_LOGIN_URL, USER_REGISTER_URL, USER_URL } from '../shared/constants/urls';
import { IUserLogin } from '../shared/interfaces/IUserLogin';
import { IUserRegister } from '../shared/interfaces/IUserRegister';
import { User } from '../shared/models/User';
import { CartService } from './cart.service';

const USER_KEY = 'User'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject<User>(this.getUserFromLocalStorage());
  public userObservable: Observable<User>;

  constructor(private http: HttpClient, private toastrService: ToastrService, private cartService: CartService) {
    this.userObservable = this.userSubject.asObservable();
  }

  public get currentUser(): User {
    return this.userSubject.value;
  }

  login(userLogin: IUserLogin): Observable<User> {
    return this.http.post<User>(USER_LOGIN_URL, userLogin).pipe(
      tap({
        next: (user) => {
          this.setUserToLocalStorage(user);
          this.userSubject.next(user);
          this.toastrService.success(
            `Welcome to my online shop, ${user.name}!`,
            'Login successful!'
          )
        },
        error: (errorResponse) => {
          this.toastrService.error(errorResponse.error, 'Login Failed!');
        }
      })
    );
  }

  register(userRegister: IUserRegister): Observable<User> {
    return this.http.post<User>(USER_REGISTER_URL, userRegister).pipe(
      tap({
        next: (user) => {
          this.setUserToLocalStorage(user);
          this.userSubject.next(user);
          this.toastrService.success(
            `Welcome to my online shop, ${user.name}!`,
            'Registration successful!'
          )
        },
        error: (errorResponse) => {
          this.toastrService.error(errorResponse.error, 'Registration Failed!');
        }
      })
    )
  }

  updateUser(userRegister: IUserRegister): Observable<User> {
    return this.http.put<User>(USER_URL, userRegister).pipe(
      tap({
        next: (user) => {
          this.setUserToLocalStorage(user);
          this.userSubject.next(user);
          this.toastrService.success(
            `Welcome to my online shop, ${user.name}!`,
            'Changes applied successfully!'
          )
        },
        error: (errorResponse) => {
          this.toastrService.error(errorResponse.error, 'Changes to Profile Failed!');
        }
      })
    )
  }

  logout() {
    this.userSubject.next(new User());
    localStorage.removeItem(USER_KEY);
    this.cartService.clearCart();
    window.location.reload();
  }

  private setUserToLocalStorage(user: User) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  private getUserFromLocalStorage(): User {
    const userJson = localStorage.getItem(USER_KEY);
    if (userJson) {
      return JSON.parse(userJson) as User;
    } else {
      return new User();
    }
  }
}
