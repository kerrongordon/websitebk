import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AdminSideBarItemComponent } from './admin-side-bar-item.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AdminSideBarItemComponent],
  exports: [AdminSideBarItemComponent]
})
export class AdminSideBarItemModule { }
