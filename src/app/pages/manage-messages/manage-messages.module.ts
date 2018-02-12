import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router'
import { ManageMessagesComponent } from './manage-messages.component'
import { AdminBarModule } from '@components/admin-bar/admin-bar.module'
import { AdminBodyModule } from '@components/admin-body/admin-body.module'
import { AdminSideBarModule } from '@components/admin-side-bar/admin-side-bar.module'
import { ReverseModule } from '@pipe/reverse/reverse.module'
import { AdminSideBarItemMessageModule } from '@components/admin-side-bar-item-message/admin-side-bar-item-message.module'


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
    AdminSideBarItemMessageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ManageMessagesComponent]
})
export class ManageMessagesModule { }
