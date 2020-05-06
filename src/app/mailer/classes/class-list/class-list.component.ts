import { Component, OnInit } from '@angular/core';
import { Class } from 'src/app/settings/shared/class.model';
import { ClassService } from 'src/app/settings/shared/class.service';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListComponent implements OnInit {
  classes: Class[];

  constructor(private classService: ClassService) { }

  ngOnInit(): void {
    this.classes = this.classService.getClasses();
  }

}
