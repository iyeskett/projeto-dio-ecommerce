import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Book } from "./model/Book";

@Injectable()

export class BookService{
    private url = 'https://makeup-api.herokuapp.com/api/v1/products.json?product_type=nail_polish';

    httpOptions = {
        Headers: new HttpHeaders({'content-type': 'aplication/json'})
    }

    constructor(private http:HttpClient){}

    getBook(){
        return this.http.get(this.url)
    }


}