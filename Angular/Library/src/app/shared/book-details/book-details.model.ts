export interface BookDetails {
    Id: number;
    Name: string;
    Author: string;
    BookAvailability: BookAvailability;
}

export enum BookAvailability {
    Available, Rented
}
