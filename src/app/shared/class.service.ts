import { Injectable, EventEmitter } from "@angular/core";
import { Class } from './class.model';

@Injectable({providedIn: 'root'})
export class ClassService {
    classSelected = new EventEmitter<Class>();

    private classes: Class[] = [
        new Class('Zumba', '1.1.1970'),
        new Class('TRX', '1.1.2020')
    ];

    getClasses() {
        return this.classes.slice();
    }
}