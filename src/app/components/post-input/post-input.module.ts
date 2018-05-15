import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PostInputComponent } from './post-input.component'
import { MarkdownService } from '@services/markdown/markdown.service'
import { UrlsanModule } from '@pipe/urlsan/urlsan.module'
import { NotificationService } from '@services/notification/notification.service'
import { ProgressbarModule } from '@components/progressbar/progressbar.module'

import {
  PerfectScrollbarModule,
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface
} from 'ngx-perfect-scrollbar'

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UrlsanModule,
    ProgressbarModule,
    PerfectScrollbarModule
  ],
  declarations: [PostInputComponent],
  exports: [PostInputComponent],
  providers: [MarkdownService, NotificationService, {
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
  }]
})
export class PostInputModule { }
