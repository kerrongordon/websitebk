import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router'
import { ManageProjectsComponent } from './manage-projects.component'
import { AdminBarModule } from '@components/admin-bar/admin-bar.module'

const routes: Routes = [
  { path: '', component: ManageProjectsComponent }
]

@NgModule({
  imports: [
    CommonModule,
    AdminBarModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ManageProjectsComponent]
})
export class ManageProjectsModule { }
