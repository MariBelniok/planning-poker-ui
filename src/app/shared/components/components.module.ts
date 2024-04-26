import { NgModule } from '@angular/core';
import { BoardComponent } from './board/board.component';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { PlayerComponent } from './player/player.component';
import { NgIconsModule } from '@ng-icons/core';
import { ionAlertOutline, ionCheckmarkDoneOutline } from '@ng-icons/ionicons';

const components = [
  BoardComponent,
  CardComponent,
  PlayerComponent,
];

@NgModule({
  imports: [
    CommonModule,
    NgIconsModule.withIcons({
      ionCheckmarkDoneOutline,
      ionAlertOutline,
    }),
  ],
  declarations: components,
  exports: components,
})
export class SharedComponentsModule { }
