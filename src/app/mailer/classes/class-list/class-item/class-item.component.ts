import { Component, OnInit, Input } from '@angular/core';
import { ClassService } from 'src/app/shared/class.service';
import { Class } from 'src/app/shared/class.model';
import { HttpService } from 'src/app/server/http.service';
import { ClientUpdateService } from 'src/app/shared/client-update.service';

@Component({
  selector: 'app-class-item',
  templateUrl: './class-item.component.html',
  styleUrls: ['./class-item.component.css']
})
export class ClassItemComponent implements OnInit {
  @Input() class: Class;

  constructor(private httpService: HttpService,
              private classService: ClassService,
              private clientUpdate: ClientUpdateService) { }

  ngOnInit(): void {
  }

  onSelected() {
    if(!this.clientUpdate.isSending) {
      this.httpService.onGetClientsById(this.class.id);
      this.classService.classSelected.emit(this.class);
    }
  }

}
