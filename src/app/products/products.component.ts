import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent {
  i:number=0;

  checktrue:boolean=true;
  
  showimageproductvalue:boolean=false;

  shownotification:boolean=false;

  selectedname:string='';
  
  showimageproduct(){
    this.showimageproductvalue=true;
    
  }

   showappnotification(eventd:any){
    this.shownotification =true;
    console.log(this.selectedname);
   console.log(eventd.target.placeholder);
    this.selectedname=eventd.target.placeholder;
   console.log(this.selectedname);
   console.log(eventd.target.value);

  }

  donotshowappnotification(eventdn:any){
    this.shownotification =false;
  }
products =[
  // {id:4 ,name:"activity tracer" ,price:'9999rs' ,color:"white",available:'Available', image:'assets/activity tracer.webp'}
  {id:1 ,name:"ALEXA" ,colorone:"Smoke Brown",colortwo:"Ivory",available:'Available', image:'assets/Alexa.jpg',descriptionone:'Copper winding',descriptiontwo:'Energy saver',descriptionthree:'2 years motor guarantee',descriptionfour:'Anti-dust'},
  {id:2 ,name:"BLISS" ,colorone:"Smoke Brown",colortwo:"Plum wine", available:'Available', image:'assets/Bliss.jpg', descriptionone:'Copper winding',descriptiontwo:'GP blade technology',descriptionthree:'Energy saver',descriptionfour:'2 years motor guarantee'},
  {id:3 ,name:"IMPERIAL" ,colorone:"Smoke Brown",colortwo:"Ivory",available:'Available', image:'assets/Imperial.jpg' , descriptionone:'Copper winding',descriptiontwo:'Energy saver',descriptionthree:'2 years motor guarantee',descriptionfour:'Anti-dust'},
  {id:4 ,name:"SAPPHIRE" ,colorone:"Smoke Brown",colortwo:"Ivory",available:'Available', image:'assets/Sapphire.jpg', descriptionone:'Copper winding',descriptiontwo:'Energy saver',descriptionthree:'GP blade technology',descriptionfour:'2 years motor guarantee'},
  {id:5 ,name:"STAR" ,colorone:"Smoke Brown",colortwo:"Plum wine",available:'Available', image:'assets/Star.jpg' , descriptionone:'Copper winding',descriptiontwo:'Energy saver',descriptionthree:'GP blade technology',descriptionfour:'2 years motor guarantee'},
  {id:6 ,name:"TURBO+" ,colorone:"Smoke Brown",colortwo:"Ivory",available:'Available', image:'assets/Turbo+.jpg' , descriptionone:'Copper winding',descriptiontwo:'Energy saver',descriptionthree:'2 years motor guarantee',descriptionfour:'Anti-dust'}
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

}


}
