import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
slogan: string = " We have every wearable devices for your needs";
source: string = "assets/wearables.jpg" ;
sloganf(){
  return'24*7';
}
}
