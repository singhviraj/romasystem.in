import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIf]'
})
export class IfDirective {

  constructor(private template:TemplateRef<any>,private viewcontainer: ViewContainerRef) { }

  @Input('appIf') set showimage(condition :boolean) {
  if(condition){
    this.viewcontainer.createEmbeddedView(this.template);
  }
  else{
    this.viewcontainer.clear();
  }
  }
}
