import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WebSocketService } from '../shared/services/websocket.service';
import { LobbyService } from '../shared/services/lobby.service';
import { MeService } from '../shared/services/me.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  public name = new FormControl('', [Validators.required, Validators.minLength(2)]);

  private router = inject(Router);

  private me = inject(MeService);

  public onLogin(): void {
    this.me.setMe({ name: this.name.value });
    this.router.navigate(['lobby']);
  }
}
