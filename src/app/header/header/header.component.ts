import { Component, EventEmitter, Output } from '@angular/core';
import { SocketioService } from 'src/app/server/socketio.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    collapsed: boolean = true;
    @Output() featureSelected = new EventEmitter<string>();

    constructor(private socketService: SocketioService) {}

    onSelect(feature: string) {
        this.featureSelected.emit(feature);
    }

    onStopBackend() {
        this.socketService.sendStopMainLoop();
    }
}