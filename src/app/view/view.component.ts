import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/navbar.service';
import { ProductsService } from '../products/products.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})


export class ViewComponent implements OnInit {

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
  }

}

