import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'
import { AddProjectComponent } from './add-project.component'
import { UrlsanModule } from '@pipe/urlsan/urlsan.module'
import { AdminBarModule } from '@components/admin-bar/admin-bar.module'
import { UploadImageButtonModule } from '@components/upload-image-button/upload-image-button.module'
import { AutosizeDirective } from '@directives/autosize/autosize.directive'
import { ButtonModule } from '@components/button/button.module'

const routes: Routes = [
  { path: '', component: AddProjectComponent }
]

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UrlsanModule,
    AdminBarModule,
    ButtonModule,
    UploadImageButtonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddProjectComponent, AutosizeDirective]
})
export class AddProjectModule { }
