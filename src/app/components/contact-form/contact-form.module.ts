import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ReactiveFormsModule } from '@angular/forms'
import { ContactFormComponent } from './contact-form.component'
import { ButtonModule } from '@components/button/button.module'

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule
  ],
  declarations: [ContactFormComponent],
  exports: [ContactFormComponent]
})
export class ContactFormModule { }
