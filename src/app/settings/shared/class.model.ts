import { Client } from './client.model';

export class Class {
    constructor(public name: string, 
                public startDate: string,
                public clients: Client[]) {}
}