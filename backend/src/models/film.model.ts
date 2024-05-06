import { Schema, model } from "mongoose";

export interface Film{
    id:string;
    name:string;
    overview:string;
    price:number;
    tags: string[];
    favorite:boolean;
    stars: number;
    imageUrl: string;
    studio: string;
    minutes:string;
}

export const FilmSchema = new Schema<Film>(
    {
        name: {type: String, required:true},
        price: {type: Number, required:true},
        tags: {type: [String]},
        favorite: {type: Boolean, default:false},
        stars: {type: Number, required:true},
        imageUrl: {type: String, required:true},
        studio: {type: String, required:true},
        minutes: {type: String, required:true}
    },{
        toJSON:{
            virtuals: true
        },
        toObject:{
            virtuals: true
        },
        timestamps:true
    }
    
);

export const FilmModel = model<Film>('film', FilmSchema);