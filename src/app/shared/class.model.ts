import { Client } from './client.model';

export class Class {
    constructor(public id: number,
                public name: string, 
                public startDate: string,
                public clients: Client[]) {}
}