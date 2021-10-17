import { Document } from "mongoose";

export interface IMenu extends Document{
    name: string;
    description: string;
    price: number;
}
