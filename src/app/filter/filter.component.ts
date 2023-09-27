import { Component ,ElementRef,EventEmitter,Input, Output ,ViewChild} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
@Input('total') all:number = 0;

@Input() avail:number = 0;

@Input() unavail:number = 0;

onselect(eventdata :any){
  eventdata.target.value;
 this.selectedradiobutton = eventdata.target.value;

}
selectedradiobutton :string='All';
selectedradiobutton2:string ='All';

 
//@Output() onChange(eventdata : any){
//return eventdata;

//}
//string is returned in x


//@Output() Filterradiobuttonselection: EventEmitter<string> = new EventEmitter<string>();

//changeafterselection(){
  //this.Filterradiobuttonselection.emit(this.selectedradiobutton);
//}
}



