import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { Class } from 'src/app/shared/class.model';
import { LinkService } from 'src/app/shared/link.service';
import { Link } from 'src/app/shared/link.model';
import { SocketioService } from 'src/app/server/socketio.service';
import { ClientUpdateService } from 'src/app/shared/client-update.service';
import { HttpService } from 'src/app/server/http.service';

@Component({
  selector: 'app-class-detail',
  templateUrl: './class-detail.component.html',
  styleUrls: ['./class-detail.component.css']
})
export class ClassDetailComponent implements OnInit {
  @Input() class: Class;
  @ViewChild('youtubeLink', {static: true}) youtubeLinkRef: ElementRef;
  isConfirmed: boolean = false;
  sending: boolean = false;
  confirmedLink: Link = new Link('');

  constructor(private linkService: LinkService,
              private socketService: SocketioService,
              private clientUpdate: ClientUpdateService,
              private httpService: HttpService) { }

  ngOnInit(): void {
    this.linkService.linkChanged.subscribe((link: Link) => {
      this.confirmedLink = link;
    });
  }


  onAddLink() {
    let newLink = this.youtubeLinkRef.nativeElement.value;
    if (newLink !== '') {
      this.linkService.addLink(new Link(newLink));
      this.isConfirmed = true;
      this.httpService.onPostMessage(this.confirmedLink, this.class)
    }
  }

  onResetLink() {
    this.linkService.addLink(new Link(''));
    this.isConfirmed = false
  }

  onSendLink() {
    this.socketService.sendRunMainLoop(this.class);
    this.clientUpdate.isSending = true;
  }

  onStopSendLink() {
    this.socketService.sendStopMainLoop();
    this.clientUpdate.isSending = false;
  }

  isSending() {
    return this.clientUpdate.isSending;
  }

  linkConfirmed() {
    return this.isConfirmed
  }

  isConfirmedOrSending() {
    return this.linkConfirmed() && !this.isSending();
  }

  displayLink() {
    return (this.confirmedLink.link !== '') ? this.confirmedLink.link : false;
  }
}
