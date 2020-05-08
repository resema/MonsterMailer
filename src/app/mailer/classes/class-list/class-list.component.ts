import { Component, OnInit, DoCheck } from '@angular/core';
import { Class } from 'src/app/shared/class.model';
import { ClassService } from 'src/app/shared/class.service';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListComponent implements OnInit, DoCheck {
  classes: Class[];

  constructor(private classService: ClassService) { }

  ngOnInit(): void {
    this.classes = this.classService.getClasses();
  }

  ngDoCheck(): void {
    this.classes = this.classService.getClasses();
  }

}
