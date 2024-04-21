import { Component, OnInit } from '@angular/core';
import { WebSocketService } from './shared/services/websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private socket: WebSocketService) {
    this.socket.init('lobby')
  }

  ngOnInit(): void {
    this.socket.listen('msgToClient').subscribe((res) => console.log(res))
  }

  public send(): void {
    this.socket.emit('msgToServer', { msg: 'Hello from client' })
  }
}
