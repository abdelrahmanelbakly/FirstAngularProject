import { RatingRepresentation } from "./rating-representation";

export interface ProductRepresentation{
   id?:string,
   title?:string,
   description?:string,
   category?:string,
   image?:string,
   price?:number,
   rating?: RatingRepresentation
}