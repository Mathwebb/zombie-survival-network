import { Location } from './location'

export enum Gender{
    Masculine = "Masculine",
    Feminine = "Feminine"
}

export interface Inventory{
    ammo: number,
    medicine: number,
    food: number,
    water: number
}

export interface Survivor {
    name: string,
    age: number,
    gender: Gender,
    location: Location,
    inventory: Inventory
}