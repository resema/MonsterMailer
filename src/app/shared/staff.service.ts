import { Injectable, EventEmitter } from "@angular/core";
import { Client } from './client.model';

@Injectable({
    providedIn: 'root'
})
export class StaffService {
    staffReceived = new EventEmitter<Client[]>();

}