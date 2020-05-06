import { Component, OnInit, Input } from '@angular/core';
import { ClassService } from 'src/app/shared/class.service';
import { Class } from 'src/app/shared/class.model';

@Component({
  selector: 'app-class-item',
  templateUrl: './class-item.component.html',
  styleUrls: ['./class-item.component.css']
})
export class ClassItemComponent implements OnInit {
  @Input() class: Class;

  constructor(private classService: ClassService) { }

  ngOnInit(): void {
  }

  onSelected() {
    this.classService.classSelected.emit(this.class);
  }

}
