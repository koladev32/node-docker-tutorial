import { Document } from "mongoose";

export interface IMenu extends Document{
    name: string
    restaurant: string;
    description: string;
    price: number;
    created: Date;
}
