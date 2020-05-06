import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { LinkService } from '../settings/shared/link.service';
import { Link } from '../settings/shared/link.model';
import { Class } from '../settings/shared/class.model';
import { ClassService } from '../settings/shared/class.service';

@Component({
  selector: 'app-mailer',
  templateUrl: './mailer.component.html',
  styleUrls: ['./mailer.component.css']
})
export class MailerComponent implements OnInit {
  selectedClass: Class;

  constructor(private linkService: LinkService,
              private classService: ClassService) {}

  ngOnInit(): void {
    this.classService.classSelected.subscribe((selected: Class) => {
      this.selectedClass = selected;
    });
  }

}