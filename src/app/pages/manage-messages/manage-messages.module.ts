import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router'
import { ManageMessagesComponent } from './manage-messages.component'
import { AdminBarModule } from '@components/admin-bar/admin-bar.module'
import { AdminBodyModule } from '@components/admin-body/admin-body.module'
import { AdminSideBarModule } from '@components/admin-side-bar/admin-side-bar.module'
import { AdminSideBarItemModule } from '@components/admin-side-bar-item/admin-side-bar-item.module'
import { ReverseModule } from '@pipe/reverse/reverse.module'


const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: ManageMessagesComponent },
      { path: ':id', component: ManageMessagesComponent }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    ReverseModule,
    AdminBarModule,
    AdminBodyModule,
    AdminSideBarModule,
    AdminSideBarItemModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ManageMessagesComponent]
})
export class ManageMessagesModule { }
