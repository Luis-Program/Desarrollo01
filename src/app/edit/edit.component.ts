import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../Model/Product';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  products: Product[] = [];
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

    Edit():void{
      this.router.navigate(["ProductEdit"]);
    }
    Delete():void{

    }

}
