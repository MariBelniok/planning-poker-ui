import { NgModule } from '@angular/core';
import { BoardComponent } from './board/board.component';
import { CommonModule } from '@angular/common';

const components = [
  BoardComponent,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: components,
  exports: components,
})
export class SharedComponentsModule { }
