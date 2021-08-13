import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../Model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http : HttpClient) { }

  private url = 'http://localhost:3000';

  getData():Observable<any[]>{

    return this.http.get<any[]>(this.url+'/Get');
  }

  getDataId(product:any):Observable<any[]>{

    return this.http.get<any[]>(this.url+'/Get/'+product);
  }

  saveData(product:any){

    return this.http.post(this.url+'/Create', product);
  }


  updateData(product:any){
    return this.http.put(this.url+'/Update/'+product._id,product);
  }

  deleteData(product:any){
    return this.http.delete(this.url+'/Delete/'+product);
  }

}
