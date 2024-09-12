import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  showPassword: boolean = false;
  public loginForm!: FormGroup;
  windowSize!: number;
  windowLg: boolean = true;
  isSubmitted: boolean = false;
  loading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: [''],
    });
  }

  ngOnInit(): void {
    this.screenSize();
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: [''],
    });
  }

  get Email() {
    return this.loginForm.get('email');
  }

  get Password() {
    return this.loginForm.get('password');
  }

  login(event: Event) {
    this.loading = true;
    event.preventDefault();
    this.authService.login(this.loginForm.value).subscribe(
      (data) => {
        this.router.navigate(['/dashboard']);
      },
      (error) => {
        console.error('Error de autenticación:', error);
        this.loading = false;
      }
    );
  }

  switchPasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  screenSize() {
    this.windowSize = screen.width;
    if (this.windowSize < 1183) {
      this.windowLg = false;
    }
  }
}
