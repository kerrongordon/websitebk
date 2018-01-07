import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { HeaderBarComponent } from './header-bar.component'
import { IconsModule } from '@components/icons/icons.module'
import { TruncateModule } from '../../pipe/truncate/truncate.module'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    IconsModule,
    TruncateModule
  ],
  declarations: [HeaderBarComponent],
  exports: [HeaderBarComponent]
})
export class HeaderBarModule { }
