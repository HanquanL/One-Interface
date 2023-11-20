import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { trigger, transition, style, animate } from '@angular/animations';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(500, style({ opacity: 1 }))
      ])
    ])
  ]
})
export class LoginSignupComponent {
  username: string = '';
  password: string = '';
  firstName: string = '';
  lastName: string = '';
  isSignup: boolean = false;
  // ...

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  close(): void {
    this.snackBar.dismiss();
  }

  login(): void {
    // Implement your login logic here
    const credentials = { username: this.username, password: this.password };
    this.http.post('http://localhost:8080/login', credentials).subscribe(
      response => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  signup(): void {
    // Implement your signup logic here
    const userDetails = {
      username: this.username,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName
    };
    this.http.post('http://localhost:8080/signup', userDetails).subscribe(
      response => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}

