import { Component, OnInit } from '@angular/core';
import { Product } from '../Model/Product';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})


export class ViewComponent implements OnInit {

  products: Product[] = [];

  constructor() { }

  ngOnInit(): void {
    this.products = [{idProduct:1, productName:'Daniel',productCost:33,productAmount:12}];
  }

}

