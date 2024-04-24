import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoardComponent {
  public selectedCard$ = new BehaviorSubject(undefined);

  public fibonacciSequence = ['0', '1', '2', '3', '5', '8', '13', '21', '34', '55', '89', '?'];
}
