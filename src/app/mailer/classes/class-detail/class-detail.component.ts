import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { Class } from 'src/app/settings/shared/class.model';
import { LinkService } from 'src/app/settings/shared/link.service';
import { Link } from 'src/app/settings/shared/link.model';

@Component({
  selector: 'app-class-detail',
  templateUrl: './class-detail.component.html',
  styleUrls: ['./class-detail.component.css']
})
export class ClassDetailComponent implements OnInit {
  @Input() class: Class;
  @ViewChild('youtubeLink', {static: true}) youtubeLinkRef: ElementRef;
  isConfirmed: boolean = false;
  confirmedLink: Link = new Link('');

  constructor(private linkService: LinkService) { }

  ngOnInit(): void {
    this.linkService.linkChanged.subscribe((link: Link) => {
      this.confirmedLink = link;
    });
  }


  onAddLink() {
    this.linkService.addLink(new Link(this.youtubeLinkRef.nativeElement.value));
    this.isConfirmed = true;
  }

  onResetLink() {
    this.linkService.addLink(new Link(''));
    this.isConfirmed = false
  }

  onSendLink() {

  }

  linkConfirmed() {
    return this.isConfirmed
  }

  displayLink() {
    return (this.confirmedLink.link !== '') ? this.confirmedLink.link : false;
  }
}
