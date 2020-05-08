import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { LinkService } from '../shared/link.service';
import { Link } from '../shared/link.model';
import { Class } from '../shared/class.model';
import { ClassService } from '../shared/class.service';
import { ClientUpdateService } from '../shared/client-update.service';

@Component({
  selector: 'app-mailer',
  templateUrl: './mailer.component.html',
  styleUrls: ['./mailer.component.css']
})
export class MailerComponent implements OnInit {
  selectedClass: Class;

  constructor(private classService: ClassService) {}

  ngOnInit(): void {
    this.classService.classSelected.subscribe((selected: Class) => {
      this.selectedClass = selected;
    });
  }

}