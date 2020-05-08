import { Component, OnInit, Input } from '@angular/core';
import { Class } from 'src/app/shared/class.model';
import { Client } from 'src/app/shared/client.model';

@Component({
  selector: 'app-visitor-list',
  templateUrl: './visitor-list.component.html',
  styleUrls: ['./visitor-list.component.css']
})
export class VisitorListComponent implements OnInit {
  @Input() class: Class;

  constructor() { }

  ngOnInit(): void {
  }

}
