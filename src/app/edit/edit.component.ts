import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from 'src/navbar.service';
import { Product } from '../Model/Product';
import { ProductsService } from '../products/products.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  public ItemsArray: any[] = [];
  constructor(public nav:NavbarService, private router:Router,private service : ProductsService) { }

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

}
