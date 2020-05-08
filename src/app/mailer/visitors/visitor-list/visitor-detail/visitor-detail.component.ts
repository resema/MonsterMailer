import { Component, OnInit, Input } from '@angular/core';
import { Client } from 'src/app/shared/client.model';

@Component({
  selector: 'app-visitor-detail',
  templateUrl: './visitor-detail.component.html',
  styleUrls: ['./visitor-detail.component.css']
})
export class VisitorDetailComponent implements OnInit {
  @Input() client: Client;

  constructor() { }

  ngOnInit(): void {
  }

  onSelected(): void {
  }

}
