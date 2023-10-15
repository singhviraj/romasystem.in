import { Component,AfterContentChecked,ViewChild,OnInit, HostBinding } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

@ViewChild('about') someinput !: AboutComponent;

constructor(private route:Router){}

aboutus(){
  this.someinput.showabout ='true';
  //this.clickedvalue = 'true'; 

}

navigatetoproducts(){
 this.route.navigateByUrl('Products');
}
}