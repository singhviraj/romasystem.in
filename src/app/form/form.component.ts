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

  customeremail:string='';

  selectedchoice:string='';

  message:string='';

  showformstatus:boolean=false;
  async onsubmit(formdata: NgForm){

console.log(formdata);


// emailjs.init("8rBqRwH7jBJwVJMYK");
//let respone =await emailjs.send("service_9axa3hk","template_kj1a0cj",{
  //from_name: this.customername,
  //subject: this.selectedchoice,
  //message: this.message,
  //from_id: this.customeremail,
  //});

   emailjs.init("kdF3wSg7_7tnu1tnO");
let respone =await  emailjs.send("service_2hukh4i","template_ebnf1y2",{
    fromname: this.customername,
    emailid: this.customeremail,
    subject: this.selectedchoice,
    message: this.message,
    });

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