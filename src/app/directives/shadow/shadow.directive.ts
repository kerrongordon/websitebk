import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[kgShadow]'
})
export class ShadowDirective {

  constructor(
    private _elementRef: ElementRef
  ) { 
    this._elementRef.nativeElement.style.boxShadow = '0px 1px 6px rgba(0,0,0,0.117647), 0px 1px 4px rgba(0,0,0,0.117647)';
  }

}
