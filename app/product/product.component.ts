import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  //styleUrls: ['./product.component.css']
 // template:`
  //     <h3> {{name}}</h3>`


})
export class ProductComponent implements OnInit {
 //let varname :type=value;


 products: any=[
 {"pno":"100","pname":"laptop","price":"38000"},
 {"pno":"200","pname":"Desktop","price":"8000"},
 {"pno":"300","pname":"projector","price":"40000"}
 ]


  @Input('var') name:string;
  cost:number;
  no:number;
propertybinding:string;
towaybinding:string;
constructor() {
 //this.name="sharath ";
  this.name="redmi4";
  this.cost=9000;
  this.no=1155669;
 this.propertybinding="clicked";
 this.towaybinding="Multi bind" 
 }
 
 status():void{
   alert("button is clicked");
 }

 isBold:boolean=true;
 isItalic:boolean=false;

 ApplyStyles(){

  let styles={
    'font-weight' : this.isItalic? 'italic' : 'normal',
    'color':'blue'
  };

  return styles;
 }




  ngOnInit() {
  }

}
