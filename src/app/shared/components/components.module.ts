import { NgModule } from '@angular/core';
import { BoardComponent } from './board/board.component';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';

const components = [
  BoardComponent,
  CardComponent,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: components,
  exports: components,
})
export class SharedComponentsModule { }
