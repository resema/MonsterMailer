import { Component, EventEmitter, Output } from '@angular/core';
import { SocketioService } from 'src/app/server/socketio.service';
import { ClientUpdateService } from 'src/app/shared/client-update.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    collapsed: boolean = true;
    @Output() featureSelected = new EventEmitter<string>();

    constructor(private socketService: SocketioService,
                private clientUpdate: ClientUpdateService) {}

    onSelect(feature: string) {
        if(!this.clientUpdate.isSending) {
            this.featureSelected.emit(feature);
        }
    }

    onStopBackend() {
        this.socketService.sendStopMainLoop();
    }
}