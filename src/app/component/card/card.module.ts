import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../../component/card/card/card.component';

import { ShadowDirective } from '../../directives/shadow/shadow.directive';
import { PointerDirective } from '../../directives/pointer/pointer.directive';
import { HoverDirective } from '../../directives/hover/hover.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CardComponent,
    ShadowDirective,
    PointerDirective,
    HoverDirective
  ],
  exports: [
    CardComponent,
    ShadowDirective,
    PointerDirective,
    HoverDirective
  ]
})
export class CardModule { }
