import { Client } from './client.model';

export class Content {
    private link: string;
    private clients: Client[];
    
    constructor() {
        this.link = '';
        this.clients = [];
    }

    getLink() {
        return this.link;
    }

    getClients() {
        return this.clients.slice();
    }

    setLink(link: string) {
        this.link = link;
    }

    setClient(client: Client) {
        this.clients.push(client);
    }

    setClients(clients: Client[]) {
        this.clients.push(...clients);
    }
}