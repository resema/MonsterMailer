import { Injectable, EventEmitter } from "@angular/core";
import { Link } from './link.model';

@Injectable({providedIn: 'root'})
export class LinkService {
    linkChanged = new EventEmitter<Link>();

    private link: Link;

    getLink() {
        return this.link;
    }

    addLink(link: Link) {
        this.link = link;
        this.linkChanged.emit(this.link);
    }
}