import { Directive, HostListener, Renderer2 ,OnInit, ElementRef} from '@angular/core';
import { NavComponent } from './nav/nav.component';

@Directive({
  selector: '[appMouseover]'
})
export class MouseoverDirective {

  constructor(private h:ElementRef , private renderer:Renderer2) { }
@HostListener('mouseenter') onmouseover(){
  this.renderer.setStyle(this.h.nativeElement,'opacity','1.0');
}

@HostListener('mouseleave') onmouseout(){
  this.renderer.setStyle(this.h.nativeElement,'opacity','0.0');
}
}
