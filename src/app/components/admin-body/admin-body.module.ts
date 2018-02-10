import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AdminBodyComponent } from './admin-body.component'
import { FormsModule } from '@angular/forms'
import { AutosizeModule } from '@directives/autosize/autosize.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AutosizeModule
  ],
  declarations: [AdminBodyComponent],
  exports: [AdminBodyComponent]
})
export class AdminBodyModule { }
