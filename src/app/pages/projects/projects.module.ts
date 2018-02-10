import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'
import { ProjectsComponent } from './projects.component'

import { HeroModule } from '@components/hero/hero.module'
import { CardModule } from '@components/card/card.module'
import { CardImageModule } from '@components/card-image/card-image.module'
import { CardContentModule } from '@components/card-content/card-content.module'
import { FooterModule } from '@components/footer/footer.module'
import { HeaderBarModule } from '@components/header-bar/header-bar.module'

const routes: Routes = [
  { path: '', component: ProjectsComponent }
]

@NgModule({
  imports: [
    CommonModule,
    HeaderBarModule,
    HeroModule,
    CardModule,
    CardImageModule,
    CardContentModule,
    FooterModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProjectsComponent]
})
export class ProjectsModule { }
