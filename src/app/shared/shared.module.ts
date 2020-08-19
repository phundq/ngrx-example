import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonContainerComponent } from './button-container/button-container.component';



@NgModule({
  declarations: [ButtonContainerComponent],
  imports: [
    CommonModule
  ],
  exports:[
    ButtonContainerComponent
  ]
})
export class SharedModule { }
