import { NgModule } from '@angular/core';
import {
  MatInputModule,
  MatAutocompleteModule,
  MatListModule,
  MatFormFieldModule
} from '@angular/material';

@NgModule({
  imports: [
    MatInputModule,
    MatAutocompleteModule,
    MatListModule,
    MatFormFieldModule
  ],
  exports: [
    MatInputModule,
    MatAutocompleteModule,
    MatListModule,
    MatFormFieldModule
  ],
})
export class MaterialModule { }
