import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AdminSideBarComponent } from './admin-side-bar.component'

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AdminSideBarComponent],
  exports: [AdminSideBarComponent]
})
export class AdminSideBarModule { }
