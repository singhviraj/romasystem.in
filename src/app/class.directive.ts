import { Directive ,ElementRef,Input,Renderer2} from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  constructor(private h:ElementRef , private renderer:Renderer2) { }

@Input('appClass') set display(param: object){
  let entries= Object.entries(param);
  for(let[classname,condition] of entries){
    if(condition){
      this.renderer.addClass(this.h.nativeElement,classname);
    }
  }
}
}
