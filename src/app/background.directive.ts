import { Directive,OnInit,ElementRef ,Renderer2} from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective implements OnInit{
  
constructor(private ele:ElementRef ,private renderer :Renderer2){}

ngOnInit(){
this.renderer.setStyle(this.ele.nativeElement,'backgroundColor','wheat');


}
}
