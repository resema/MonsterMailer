import { Injectable } from "@angular/core";
import { HttpService } from '../server/http.service';
import { ClassService } from './class.service';
import { Class } from './class.model';

@Injectable({
    providedIn: 'root'
})
export class ClientUpdateService {
    public isSending = false;

    constructor(private httpService: HttpService,
                private classService: ClassService) {}

    update() {
        const classes = this.classService.getClasses();
        classes.forEach(elem => {
            this.httpService.onGetClientsByIdFromDb(elem.id);
        });
    }
}