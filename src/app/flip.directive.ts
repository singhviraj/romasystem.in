import { Directive,ElementRef,Renderer2,Input } from '@angular/core';

@Directive({
  selector: '[appFlip]'
})
export class FlipDirective {

constructor(private h:ElementRef , private renderer:Renderer2) { }

@Input('appFlip') set display(param: object){
  let entries= Object.entries(param);
  for(let[classname,condition] of entries){
    if(condition){
      this.renderer.addClass(this.h.nativeElement,classname);
    }
  }
}
}


