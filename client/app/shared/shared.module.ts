import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { HeaderComponent }         from './../admin/header.component.ts';
import { RouterModule } from '@angular/router';


@NgModule({
  imports:      [ CommonModule, FormsModule],
  exports:      [CommonModule,
    FormsModule ]
})
export class SharedModule { }

