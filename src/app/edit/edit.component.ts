import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { NavbarService } from 'src/navbar.service';
import { Product } from '../Model/Product';
import { ProductsService } from '../products/products.service';
=======
import { Product } from '../Model/Product';
>>>>>>> 3da60c47e4ab20863858b53c20f0e67a1f5bf17a

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
<<<<<<< HEAD
  public ItemsArray: any[] = [];
  constructor(public nav:NavbarService, private router:Router,private service : ProductsService) { }
=======
  products: Product[] = [];
  constructor(private router:Router) { }
>>>>>>> 3da60c47e4ab20863858b53c20f0e67a1f5bf17a

  ngOnInit(): void {
    this.nav.show();
    this.nav.doSomethingElseUseful();
    this.getDataApi();
  }

    Edit(product:any):void{
      this.router.navigate(["ProductEdit"],product);
    }
    Delete(product:any):void{
    
      this.service.deleteData(product).subscribe((res:any) => this.gotoUserList() );
    }

    getDataApi(){
      this.service.getData().subscribe((res: any[])=> {
          this.ItemsArray = res;
      });
    }
    

  gotoUserList() {
    this.router.navigate(['/ViewProduct']);
  }

    Edit():void{
      this.router.navigate(["ProductEdit"]);
    }
    Delete():void{

    }

}
