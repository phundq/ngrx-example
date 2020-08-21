import { EffectsModule } from '@ngrx/effects';
import { appReducer } from './app-state';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthEffect } from './effects/auth.effect';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([AuthEffect]),
  ],
  providers: [
    AuthEffect
  ]
})
export class AppStoreModule { }
