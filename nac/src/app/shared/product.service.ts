import { Injectable, EventEmitter} from '@angular/core';
import {LoggerService} from "./logger.service";
import {Http} from "@angular/Http";
import { Observable } from "rxjs";
import 'rxjs/Rx';//订阅流要用到的模块

@Injectable()
export class ProductService {

  searchEvent: EventEmitter<ProductSearchParams> = new EventEmitter();
  


  constructor(public logger:LoggerService, private http:Http) {}

  getAllCategories(): string[]{
    return ['电子商品', '硬件设备', '图书'];
  }

  getProducts(): Observable<Product[]> {
    return this.http.get("/api/products").map(res => res.json())
  }
  
  getProduct(id: number): Observable<Product> {
    return this.http.get("/api/product/"+id).map(res => res.json())
  }

  getCommentsForProductId(id: number): Observable<Comment[]> {
    return this.http.get("/api/product/"+id+"/comments").map(res => res.json())
  }

  search(params: ProductSearchParams): Observable<Product[]> {
    return this.http.get("/api/products", {search: this.encodeParmars(params)}).map(res => res.json())
  }
  
  private encodeParmars(params: ProductSearchParams) {
    return Object.keys(params).filter(key => params[key])
      .reduce((sum: URLSearchParams, key: string) => {
        sum.append(key, params[key]);
        return sum;
      }, new URLSearchParams()) 
  }



}

export class Product {

  constructor(
    public id:number,
    public title:string,
    public price:number,
    public rating: number,
    public desc:string,
    public categories: Array<string>
  ){

  }
}

export class Comment {

  constructor(
    public id: number,
    public productId: number,
    public timestamp: string,
    public user: string,
    public rating: number,
    public content: string
  ) {

  }

}

export class ProductSearchParams {
  
  constructor(
    public title:string,
    public price:number,
    public category:string
  ){}

}