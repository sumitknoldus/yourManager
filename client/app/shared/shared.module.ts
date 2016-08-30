import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { HeaderComponent }         from './header/header.component';
import { ROUTER_DIRECTIVES } from '@angular/router';


@NgModule({
  imports:      [ CommonModule ],
  declarations: [ HeaderComponent,ROUTER_DIRECTIVES],
  exports:      [ HeaderComponent,
    CommonModule,
    FormsModule ]
})
export class SharedModule { }

