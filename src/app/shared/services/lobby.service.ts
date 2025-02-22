import { Injectable, inject } from "@angular/core";
import { WebSocketService } from "./websocket.service";
import { Observable } from "rxjs";
import { MeService } from "./me.service";

@Injectable({ providedIn: 'root' })
export class LobbyService {
  private ws = inject(WebSocketService);

  public init(): void {
    this.ws.init('lobby');
  }

  public getMe(): Observable<any> {
    return this.ws.listen('meID');
  }

  public joinRoom(data: any): void {
    this.ws.emit('joinRoom', data);
  }

  public getRoom(): Observable<any> {
    return this.ws.listen('getRoom');
  }

  public setPoint(data: any): void {
    this.ws.emit('setPoint', data);
  }
}
