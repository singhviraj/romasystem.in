import { Component, DoCheck, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsComponent } from '../products/products.component';


@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit{
  productid: number=0 ;
  

  constructor(private activatedroute:ActivatedRoute){}

ngOnInit(){
      
      this.productid= Number(this.activatedroute.snapshot.paramMap.get('id'));
        console.log( this.productid) ;
}
}
