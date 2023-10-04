import { Component,AfterContentChecked,ViewChild,OnInit } from '@angular/core';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
//clickedvalue:string = 'false';
@ViewChild('about') someinput !: AboutComponent;

aboutus(){
  this.someinput.showabout ='true';
  //this.clickedvalue = 'true'; 

}

    
  }
