import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { FormControl } from '@angular/forms'
import 'rxjs/Rx'
import { Observable } from "rxjs";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  //private products:Array<Product>;
  private products: Observable<Product[]>
  private imgUrl='http://placehold.it/320X150';
  

  constructor(private productService: ProductService) { 
    
  }

  ngOnInit() {
    this.products = this.productService.getProducts()

    this.productService.searchEvent.subscribe(
      params => this.products = this.productService.search(params)
    )
  }

}
export class Product{
  constructor(
    public id:number,
    public title:string,
    public price:number,
    public rating:number,
    public desc:string,
    public categories:Array<string>
  ){}
}