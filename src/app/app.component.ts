import { Component, OnInit } from '@angular/core';
import { SocketioService } from './server/socketio.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MonsterMailer';
  loadedFeature: string = 'mailer';

  constructor(private socketService: SocketioService) {}

  ngOnInit() {
    this.socketService.setupSocketConnection();
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

}
