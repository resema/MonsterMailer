import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import { Class } from '../shared/class.model';
import { Link } from '../shared/link.model';
import { Client } from '../shared/client.model';
import { ClassService } from '../shared/class.service';
import { MessageService } from '../shared/message.service';

@Injectable({
    providedIn: 'root'
})

export class HttpService {

    constructor(private http: HttpClient,
                private classService: ClassService,
                private messageService: MessageService) {}

    onGetClasses() {
        this.http.get('http://localhost:4444/api/classes')
        .subscribe(responseData => {
            let classes: Class[] = [];
            for(const key in responseData) {
                const obj = responseData[key];
                let newClass = new Class(
                    obj.id,
                    obj.name,
                    obj.startDate,
                    obj.clients
                );
                classes.push(newClass);
            }
            this.classService.addClasses(classes);
        });
    }

    onGetClientsById(id: number) {
        this.http.get('http://localhost:4444/api/class/' + id.toString())
        .subscribe(responseData => {
            let clients: Client[] = [];
            for(const key in responseData) {
                const obj = responseData[key];
                let newClient = new Client(
                    obj.firstname,
                    obj.lastname,
                    obj.emailaddr
                );
                clients.push(newClient);
            }
            this.classService.addClientsById(id, clients);
        });;
    }

    onGetClientsByIdFromDb(id: number) {
        this.http.get('http://localhost:4444/api/class-db/' + id.toString())
        .subscribe(responseData => {
            let clients: Client[] = [];
            for(const key in responseData) {
                const obj = responseData[key];
                let newClient = new Client(
                    obj.firstname,
                    obj.lastname,
                    obj.emailaddr
                );
                clients.push(newClient);
            }
            this.classService.addClientsById(id, clients);
        });;
    }

    onGetMessage() {
        this.http.get('http://localhost:4444/api/message')
        .subscribe(responseData => {
            this.messageService.addMessage(responseData.toString());
            this.messageService.messageReceived.emit();
        });
    }

    onPostMessage(link: Link, selClass: Class) {
        let postData = {
            link,
            selClass
        };
        this.http.post('http://localhost:4444/api/message', postData)
        .subscribe(res => {
            console.log(res);
        });
    }

    onPostEmail(client: Client) {

        this.http.post('http://localhost:4444/api/email', client)
        .subscribe(res => {
            console.log(res);
        });
    }

    onPostAllEmail(clients: Client[]) {

        this.http.post('http://localhost:4444/api/emails', clients)
        .subscribe(res => {
            console.log(res);
        });
    }

}