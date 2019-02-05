class Product{
prodid:number;
prdname:String;
prodcost:number;

constructor()
{
this.prodcost=10;
this.prdname="redmi4"
this.prodid=1155669;
}
getDetails():void{
    console.log("product details are");
    console.log("prod cost "+this.prodcost);
    console.log("prod name"+this.prdname);
    console.log("prod id"+this.prodid);
}
}

//object creation
let prodobject=new Product();
prodobject.getDetails();


class Tempprod extends Product{
 duration: number;
 constructor()
 {
     super();
     this.duration=6;

 }
 public getDetails():void{
    console.log("product details are");
    console.log("prod cost "+this.prodcost);
    console.log("prod name"+this.prdname);
    console.log("prod id"+this.prodid);  
 }
}
 let tempprodobject=new Tempprod();
 tempprodobject.getDetails();







 