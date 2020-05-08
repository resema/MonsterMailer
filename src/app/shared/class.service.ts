import { Injectable, EventEmitter } from "@angular/core";
import { Class } from './class.model';
import { Client } from './client.model';

@Injectable({providedIn: 'root'})
export class ClassService {
    classSelected = new EventEmitter<Class>();

    private classes: Class[] = [];

    addClasses(classes: Class[]) {
        this.classes = classes;
        console.log(this.classes);
    }

    getClasses(): Class[] {
        return this.classes;
    }

    addClientsById(id: number, clients: Client[]) {
        this.classes.find(elem => {
            return elem.id === id;
        }).clients = clients;
    }

}