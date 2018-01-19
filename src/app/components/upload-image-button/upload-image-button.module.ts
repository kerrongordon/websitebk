import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { UploadImageButtonComponent } from './upload-image-button.component'
import { ProgressbarModule } from '@components/progressbar/progressbar.module'
import { ButtonModule } from '@components/button/button.module'

@NgModule({
  imports: [
    CommonModule,
    ProgressbarModule,
    ButtonModule,
  ],
  declarations: [UploadImageButtonComponent],
  exports: [UploadImageButtonComponent]
})
export class UploadImageButtonModule { }
