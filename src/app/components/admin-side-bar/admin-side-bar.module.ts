import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AdminSideBarComponent } from './admin-side-bar.component'

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
    PerfectScrollbarModule
  ],
  declarations: [AdminSideBarComponent],
  exports: [AdminSideBarComponent],
  providers: [{
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  }]
})
export class AdminSideBarModule { }
