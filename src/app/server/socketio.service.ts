import { Injectable } from '@angular/core';
import * as io from 'socket.io-client'
import { environment } from './environment';
import { Class } from '../shared/class.model';
import { HttpService } from './http.service';
import { ClientUpdateService } from '../shared/client-update.service';

@Injectable({
  providedIn: 'root'
})
export class SocketioService {
  socket;

  constructor(private http: HttpService,
              private clientUpdate: ClientUpdateService) { }

  setupSocketConnection() {
    this.socket = io(environment.SOCKET_ENDPOINT);
    this.socket.on('update', (msg: string) => {
      console.log('Timespan: ' + msg);
      this.clientUpdate.update();
    });

    this.socket.on('classes', (data: string) => {
      console.log(data);
      this.http.onGetClasses();
    });
  }

  sendRunMainLoop(selClass: Class) {
    this.socket.emit('runMainLoop', selClass);
  }
  
  sendStopMainLoop(msg = 'stop') {
    this.socket.emit('stopMainLoop', msg);
  }
}
