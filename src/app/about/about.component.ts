import { Component, HostBinding ,HostListener} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
showabout:string='false';

sensoroption:string='Accelerometer';

onselect(eventname :any){
  eventname.target.value;
  this.sensoroption = eventname.target.value;
}

@HostBinding('style.opacity') opa:number=0.6;

}

//visibility:hidden; opacity:0;transition: visibility 0s 2s,opacity 2s linear