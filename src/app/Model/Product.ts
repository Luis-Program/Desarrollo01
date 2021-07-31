export class Product{
    constructor(id:number, name:string, cost:number, amount:number){
        this.idProduct = id;
        this.productName = name;
        this.productCost = cost;
        this.productAmount = amount;
    }
    idProduct: number;
    productName: string;
    productCost: number;
    productAmount: number;

}