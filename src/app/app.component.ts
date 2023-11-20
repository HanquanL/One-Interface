import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginSignupComponent } from './login-signup/login-signup.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'one-interface';
  isLoggedIn = false;

  constructor(private snackBar: MatSnackBar) { }

  openLoginSignup(): void {
    this.snackBar.openFromComponent(LoginSignupComponent, {
      verticalPosition: 'top',
      horizontalPosition: 'center',
      panelClass: 'my-snack-bar'
    });
  }

  closeLoginSignup() {
    this.snackBar.dismiss();
  }

  logout() {
    this.isLoggedIn = false;
  }

}
