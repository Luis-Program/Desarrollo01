import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { NavbarService } from 'src/navbar.service';
import { ProductsService } from '../products/products.service';
import { Product } from '../Model/Product';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  productos!: any;


  constructor(public nav:NavbarService, private router:Router,private service : ProductsService) {



   }

  nas = this.router.getCurrentNavigation();
  pros = this.nas?.extras;

  ngOnInit(): void {

    this.nav.show();
    this.nav.doSomethingElseUseful();
    this.productos = this.pros;

    
  }

  onSubmit() {
    //const body = JSON.stringify(this.productos);
    //console.log(body);
    //console.log(this.productos);
    this.service.updateData(this.productos).subscribe((res:any) => this.gotoUserList() );
  }

  gotoUserList() {
    this.router.navigate(['/EditProduct']);
  }


}
