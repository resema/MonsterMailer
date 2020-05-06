import { Injectable, EventEmitter } from "@angular/core";
import { Content } from './content.model';

@Injectable({providedIn: 'root'})
export class ContentService {
    contentChanged = new EventEmitter<Content>();

    private content: Content;

    getContent() {
        return this.content;
    }

    addContent(content: Content) {
        this.content = content;
        this.contentChanged.emit(this.content);
    }
}