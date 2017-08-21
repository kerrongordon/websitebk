import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[kgHover]'
})
export class HoverDirective {

  @HostListener('mouseenter')
    onMouseEnter() { this.hover() }

  @HostListener('mouseleave') 
    onMouseLeave() { this.init() }

  @HostListener('focus')
    onFocus() { this.hover() }

  @HostListener('blur')
    onBlur() { this.init() }

  constructor(
    private _elementRef: ElementRef
  ) { }

  private init() {
    return this._elementRef.nativeElement.style.boxShadow = '0px 1px 6px rgba(0,0,0,0.117647), 0px 1px 4px rgba(0,0,0,0.117647)';
  }

  private hover() {
    return this._elementRef.nativeElement.style.boxShadow = '0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07)';
  }

}
