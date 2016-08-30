import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { HeaderComponent }         from './header/header.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports:      [ CommonModule, RouterModule ],
  declarations: [ HeaderComponent],
  exports:      [ HeaderComponent,
    CommonModule,
    FormsModule ]
})
export class SharedModule { }

