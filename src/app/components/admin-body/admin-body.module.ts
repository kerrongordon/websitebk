import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AdminBodyComponent } from './admin-body.component'
import { FormsModule } from '@angular/forms'
import { AutosizeModule } from '@directives/autosize/autosize.module'

import {
  PerfectScrollbarModule,
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface
} from 'ngx-perfect-scrollbar'

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AutosizeModule,
    PerfectScrollbarModule
  ],
  declarations: [AdminBodyComponent],
  exports: [AdminBodyComponent],
  providers: [{
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  }]
})
export class AdminBodyModule { }
