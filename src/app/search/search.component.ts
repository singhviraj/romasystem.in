import { Component } from '@angular/core';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchvalue:string = '' ;

  inputfunction(element : any){
this.searchvalue = (<HTMLInputElement>element.target).value;
  }
}
