//Membuat variabel dan tipe data film
export class Film{
    id!:string;
    name!:string;
    overview!:string;
    price!:number;
    tags?: string[];
    favorite!:boolean;
    stars!: number;
    imageUrl!: string;
    studio!: string;
    minutes!:string;
  }