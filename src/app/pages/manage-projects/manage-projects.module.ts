import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router'
import { DialogModule } from '@components/dialog/dialog.module'
import { ManageProjectsComponent } from './manage-projects.component'
import { AdminBarModule } from '@components/admin-bar/admin-bar.module'
import { AdminBodyModule } from '@components/admin-body/admin-body.module'
import { AdminSideBarModule } from '@components/admin-side-bar/admin-side-bar.module'
import { UploadImageButtonModule } from '@components/upload-image-button/upload-image-button.module'
import { ButtonModule } from '@components/button/button.module'
import { AdminSideBarItemProjectModule } from '@components/admin-side-bar-item-project/admin-side-bar-item-project.module'

import {
  PerfectScrollbarModule,
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface
} from 'ngx-perfect-scrollbar'

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
}

const routes: Routes = [
  { path: '',
    children: [
      { path: '', component: ManageProjectsComponent },
      { path: ':id', component: ManageProjectsComponent }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    AdminBarModule,
    AdminBodyModule,
    AdminSideBarModule,
    UploadImageButtonModule,
    DialogModule,
    ButtonModule,
    PerfectScrollbarModule,
    AdminSideBarItemProjectModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ManageProjectsComponent],
  providers: [{
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  }]
})
export class ManageProjectsModule { }
