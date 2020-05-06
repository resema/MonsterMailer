import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ContentService } from '../shared/content.service';
import { Content } from '../shared/content.model';
import { Class } from '../shared/class.model';
import { ClassService } from '../shared/class.service';

@Component({
  selector: 'app-mailer',
  templateUrl: './mailer.component.html',
  styleUrls: ['./mailer.component.css']
})
export class MailerComponent implements OnInit {
  selectedClass: Class;
  @ViewChild('youtubeLink', {static: true}) youtubeLinkRef: ElementRef;

  constructor(private contentService: ContentService,
              private classService: ClassService) {}

  ngOnInit(): void {
    this.classService.classSelected.subscribe((selected: Class) => {
      this.selectedClass = selected;
    });
  }

  onAddLink() {
    let newContent = new Content();
    newContent.setLink(this.youtubeLinkRef.nativeElement.value);
    this.contentService.addContent(newContent);
  }

  onSendLink() {
    
  }

  displayLink() {
    return this.youtubeLinkRef.nativeElement.value;
  }

}
