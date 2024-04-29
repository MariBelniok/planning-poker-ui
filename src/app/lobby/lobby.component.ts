import { Component, DestroyRef, OnInit, inject } from '@angular/core';
import { LobbyService } from '../shared/services/lobby.service';
import { MeService } from '../shared/services/me.service';
import { tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrl: './lobby.component.scss'
})
export class LobbyComponent implements OnInit {
  private me = inject(MeService);

  private lobby = inject(LobbyService);

  private destroyRef = inject(DestroyRef);

  private router = inject(Router);

  public players$ = this.lobby.getRoom();

  public readonly fibonacciSequence = [
    '0',
    '1',
    '2',
    '3',
    '5',
    '8',
    '13',
    '21',
    '34',
    '55',
    '89',
    '?',
  ];

  ngOnInit(): void {
    const meName = this.me.getMe()?.name;
    if (!meName) {
      this.router.navigate(['login']);
    }

    this.lobby.init();
    this.lobby.getMe()
      .pipe(
        tap(({ id }) => this.me.setMe({ id, name: meName })),
        tap(() => this.lobby.joinRoom(this.me.getMe())),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe();
  }
}
