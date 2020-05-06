import { Injectable, EventEmitter } from "@angular/core";
import { Class } from './class.model';
import { Client } from './client.model';

@Injectable({providedIn: 'root'})
export class ClassService {
    classSelected = new EventEmitter<Class>();

    private classes: Class[] = [
        new Class('Zumba',
                  '1.1.1970',
                  [
                      new Client('Hans', 'Muster', 'hans@muster.me'),
                      new Client('Markus', 'Peyer', 'markus@peyer.me'),
                      new Client('Adolf', 'Ogi', 'adolf@ogi.me'),
                  ]),
        new Class('TRX',
                  '1.1.2020',
                  [
                    new Client('Renate', 'Ludin', 'renate@ludin.me'),
                    new Client('Ingolf', 'Lück', 'ingolf@lueck.me'),
                  ])
    ];

    getClasses() {
        return this.classes.slice();
    }
}