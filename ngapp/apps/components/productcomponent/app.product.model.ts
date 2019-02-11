export class Product{
    constructor(
        public productid:number,
        public productname:string,
        public categoryname:string,
        public price:number
    ){}
}

export const Categories =["Electronics", "Electrical", "Food"];
export const Products:Array<Product> = new Array<Product>();

Products.push(new Product(101, "Laptop", "Electronics", 20000));
Products.push(new Product(102, "Iron", "Electrical", 2000));
Products.push(new Product(101, "Biscuts", "Food", 120));