import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AdminSideBarItemComponent } from './admin-side-bar-item.component'
import { TruncateModule } from '@pipe/truncate/truncate.module'

@NgModule({
  imports: [
    CommonModule,
    TruncateModule
  ],
  declarations: [AdminSideBarItemComponent],
  exports: [AdminSideBarItemComponent]
})
export class AdminSideBarItemModule { }
