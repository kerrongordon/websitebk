import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TruncateModule } from '@pipe/truncate/truncate.module'
import { AdminSideBarItemProjectComponent } from './admin-side-bar-item-project.component'

@NgModule({
  imports: [
    CommonModule,
    TruncateModule
  ],
  declarations: [AdminSideBarItemProjectComponent],
  exports: [AdminSideBarItemProjectComponent]
})
export class AdminSideBarItemProjectModule { }
