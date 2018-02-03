import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { Routes, RouterModule } from '@angular/router'
import { ProjectComponent } from './project.component'

import { CenterModule } from '@directives/center/center.module'

import { FooterModule } from '@components/footer/footer.module'
import { HeroModule } from '@components/hero/hero.module'
import { HeaderBarModule } from '@components/header-bar/header-bar.module'
import { CardImageModule } from '@components/card-image/card-image.module'

import { UrlsanModule } from '@pipe/urlsan/urlsan.module'

const routes: Routes = [
  { path: '', component: ProjectComponent }
]

@NgModule({
  imports: [
    CommonModule,
    HeaderBarModule,
    HeroModule,
    FooterModule,
    CenterModule,
    CardImageModule,
    UrlsanModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProjectComponent]
})
export class ProjectModule { }
