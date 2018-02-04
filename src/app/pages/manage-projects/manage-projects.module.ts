import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router'
import { ManageProjectsComponent } from './manage-projects.component'
import { AdminBarModule } from '@components/admin-bar/admin-bar.module'
import { AdminBodyModule } from '@components/admin-body/admin-body.module'
import { AdminSideBarModule } from '@components/admin-side-bar/admin-side-bar.module'
import { AdminSideBarItemModule } from '@components/admin-side-bar-item/admin-side-bar-item.module'

const routes: Routes = [
  { path: '', component: ManageProjectsComponent }
]

@NgModule({
  imports: [
    CommonModule,
    AdminBarModule,
    AdminBodyModule,
    AdminSideBarModule,
    AdminSideBarItemModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ManageProjectsComponent]
})
export class ManageProjectsModule { }
