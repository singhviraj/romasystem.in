import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `
  <div [hidden] = "checkstatus"> <p>This website will provide you slouch preventing devices of your choice</p>
  <div class= "close"><button class="btn" (click) = "removenotification()">x</button></div>
  </div>`,
  
  styles: ["div{margin:10px 0px ; padding: 10px 10px ; background-color:blue; text-align:center}, p{font-style:15px}",
  ".close{float: left; margin-top: -30px;}"
  ]
})
export class NotificationComponent {
checkstatus:boolean =false;

removenotification(){
this.checkstatus = true;
}
}

