import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { EmailBodyComponent } from './email-body.component'
import { ButtonModule } from '@components/button/button.module'

@NgModule({
  imports: [
    CommonModule,
    ButtonModule
  ],
  declarations: [EmailBodyComponent],
  exports: [EmailBodyComponent]
})
export class EmailBodyModule { }
