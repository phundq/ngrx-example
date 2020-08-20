import { FormsModule } from '@angular/forms';
import { LoginComponent } from './../modules/auth/login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonContainerComponent } from './button-container/button-container.component';
import { InputContainerComponent } from './input-container/input-container.component';
import { LoginContainerComponent } from './login-container/login-container.component';



@NgModule({
  declarations: [ButtonContainerComponent, InputContainerComponent, LoginContainerComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    ButtonContainerComponent,
    InputContainerComponent,
    LoginContainerComponent
  ]
})
export class SharedModule { }
