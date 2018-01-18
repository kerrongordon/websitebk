import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { EmailComponent } from './email.component'

import { TruncateModule } from '@pipe/truncate/truncate.module'
import { ReversePipe } from '@pipe/reverse/reverse.pipe'

import { EmailListModule } from '@components/email-list/email-list.module'
import { EmailListItemModule } from '@components/email-list-item/email-list-item.module'
import { EmailBodyModule } from '@components/email-body/email-body.module'
import { AdminBarModule } from '@components/admin-bar/admin-bar.module'
import { ButtonModule } from '@components/button/button.module'

const routes: Routes = [
  { path: '', component: EmailComponent }
]

@NgModule({
  imports: [
    CommonModule,
    TruncateModule,
    EmailListModule,
    EmailListItemModule,
    EmailBodyModule,
    AdminBarModule,
    ButtonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EmailComponent, ReversePipe]
})
export class EmailModule { }
