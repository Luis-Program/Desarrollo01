import { Component, OnInit } from '@angular/core';
import { Product } from '../Model/Product';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  products: Product[] = [];
  constructor() { }

  ngOnInit(): void {
  }

    Edit():void{

    }
    Delete():void{

    }

}
