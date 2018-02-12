import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TruncateModule } from '@pipe/truncate/truncate.module'
import { AdminSideBarItemMessageComponent } from './admin-side-bar-item-message.component'

@NgModule({
  imports: [
    CommonModule,
    TruncateModule
  ],
  declarations: [AdminSideBarItemMessageComponent],
  exports: [AdminSideBarItemMessageComponent]
})
export class AdminSideBarItemMessageModule { }
