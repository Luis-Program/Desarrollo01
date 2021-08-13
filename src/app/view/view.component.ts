import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { NavbarService } from 'src/navbar.service';
import { ProductsService } from '../products/products.service';
=======
import { Product } from '../Model/Product';
>>>>>>> 3da60c47e4ab20863858b53c20f0e67a1f5bf17a

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})


export class ViewComponent implements OnInit {

<<<<<<< HEAD
  public ItemsArray: any[] = [];

  constructor(private service : ProductsService,public nav:NavbarService) { }

  ngOnInit(): void {
    this.nav.show();
    this.nav.doSomethingElseUseful();
    this.getDataApi();

  }

  getDataApi(){
    this.service.getData().subscribe((res: any[])=> {
        this.ItemsArray = res;
    });
=======
  products: Product[] = [];

  constructor() { }

  ngOnInit(): void {
    this.products = [{idProduct:1, productName:'Daniel',productCost:33,productAmount:12}];
>>>>>>> 3da60c47e4ab20863858b53c20f0e67a1f5bf17a
  }

}

