import { Injectable, EventEmitter } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class MessageService {
    messageReceived = new EventEmitter<string>();
    message: string;


    addMessage(msg: string) {
        this.message = msg;
    }

    getMessage(): string {
        return this.message;
    }
}