import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { NavigationStart, Router } from '@angular/router';
import { NavbarService } from 'src/navbar.service';
import { ProductsService } from '../products/products.service';
import { Product } from '../Model/Product';
=======

>>>>>>> 3da60c47e4ab20863858b53c20f0e67a1f5bf17a
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

<<<<<<< HEAD
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


=======
  constructor() { }

  ngOnInit(): void {
  }

>>>>>>> 3da60c47e4ab20863858b53c20f0e67a1f5bf17a
}
