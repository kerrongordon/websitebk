import { ButtonModule } from '@components/button/button.module'
import { AdminBodyModule } from '@components/admin-body/admin-body.module'
import { AdminBarModule } from './../../components/admin-bar/admin-bar.module'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AddPostComponent } from './add-post.component'
import { RouterModule, Routes } from '@angular/router'
import { PostInputModule } from '@components/post-input/post-input.module'

const routes: Routes = [
  { path: '', component: AddPostComponent }
]

@NgModule({
  imports: [
    CommonModule,
    PostInputModule,
    AdminBarModule,
    AdminBodyModule,
    ButtonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddPostComponent]
})
export class AddPostModule { }
