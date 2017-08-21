import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[kgPointer]'
})
export class PointerDirective {

  constructor(
    private _elementRef: ElementRef
  ) { 
    this._elementRef.nativeElement.style.cursor = 'pointer';
  }

}