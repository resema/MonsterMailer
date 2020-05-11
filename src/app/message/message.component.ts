import { Component, OnInit } from '@angular/core';
import { MessageService } from '../shared/message.service';
import { HttpService } from '../server/http.service';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-messaging',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  message: string;

  constructor(private httpService: HttpService,
              private messageService: MessageService) { }

  ngOnInit(): void {
    this.httpService.onGetMessage();

    this.messageService.messageReceived.subscribe(_ => {
      this.message = this.messageService.getMessage();
    });
  }

}
