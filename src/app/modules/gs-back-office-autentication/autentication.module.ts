import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutenticationRoutingModule } from './autentication-routing.module';
import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './views/login/login.component';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    AutenticationRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class AutenticationModule { }
