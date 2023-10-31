import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import  emailjs  from '@emailjs/browser';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  
  customername:string='';

  selectedchoice:string='';

  message:string='';

  showformstatus:boolean=false;
  async onsubmit(formdata: NgForm){

console.log(formdata);
console.log(this.selectedchoice);

 emailjs.init("8rBqRwH7jBJwVJMYK");
let respone =await emailjs.send("service_9axa3hk","template_kj1a0cj",{
  from_name: "Viraj",
  subject: "hey",
  message: this.message,
  from_id: "gviraj347@gmail.com",
  });
 console.log("submitted");
 this.showformstatus=true;
formdata.reset();
//async onsubmit(){
 // emailjs.init("8rBqRwH7jBJwVJMYK");
//let respone =await emailjs.send("service_9axa3hk","template_kj1a0cj",{
  //from_name: "Viraj",
  //subject: "hey",
  //message: "bang ",
  //from_id: "gviraj347@gmail.com",
  //});

  //}
}
}