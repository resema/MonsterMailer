import { Component, OnInit } from '@angular/core';
import { StaffService } from '../shared/staff.service';
import { HttpService } from '../server/http.service';
import { SafeHtml } from '@angular/platform-browser';
import { Client } from '../shared/client.model';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
  staff: Client[];

  constructor(private httpService: HttpService,
              private staffService: StaffService) { }

  ngOnInit(): void {
    this.httpService.onGetStaff();

    this.staffService.staffReceived.subscribe(staff => {
      this.staff = staff;
      console.log(this.staff);
    });
  }

}
