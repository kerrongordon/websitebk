import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { AdminBarComponent } from './admin-bar.component'

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [AdminBarComponent],
  exports: [AdminBarComponent]
})
export class AdminBarModule { }
