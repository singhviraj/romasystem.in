import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  i:number=0;
products =[
  {id:1 ,name:"google lens" ,price:'1109rs' ,color:"black",available:'Available', image:'assets/Googlelens.jpg'},
  {id:2 ,name:"smart watch" ,price:'3456rs' ,color:"white",available:'Available', image:'assets/smartwatch.jpg'},
  {id:3 ,name:"smart glases" ,price:'8889rs' ,color:"black",available:'Not Available', image:'assets/smartglases.webp'},
  {id:4 ,name:"activity tracer" ,price:'9999rs' ,color:"white",available:'Available', image:'assets/activity tracer.webp'}
]

gettotalproducts(){
  return this.products.length;
}
getavailableproducts(){
  return this.products.filter(products => products.available == 'Available').length;

}
getnonavailableproducts(){
  return this.products.filter(products => products.available == 'Not Available').length;

}

productscount:string='All'

//onfilterradiobuttonchange(data: Event){
 //console.log(data);

//}
searchtext:string ='';
aftersearchtext(data :string){
this.searchtext =data;
console.log(data);
}
}
