import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { HomeComponent } from './home.component'

import { CenterModule } from '@directives/center/center.module'

import { HeroModule } from '@components/hero/hero.module'
import { CardModule } from '@components/card/card.module'
import { FooterModule } from '@components/footer/footer.module'
import { AvatarModule } from '@components/avatar/avatar.module'
import { SkillItemModule } from '@components/skill-item/skill-item.module'
import { SocialIconModule } from '@components/social-icon/social-icon.module'
import { HeaderBarModule } from '@components/header-bar/header-bar.module'
import { DescriptionModule } from '@components/description/description.module'
import { CardImageModule } from '@components/card-image/card-image.module'
import { CardContentModule } from '@components/card-content/card-content.module'
import { ContactFormModule } from '@components/contact-form/contact-form.module'
import { ButtonModule } from '@components/button/button.module'


@NgModule({
  imports: [
    CommonModule,
    CenterModule,
    HeroModule,
    AvatarModule,
    DescriptionModule,
    SocialIconModule,
    SkillItemModule,
    CardModule,
    CardImageModule,
    CardContentModule,
    ContactFormModule,
    FooterModule,
    HeaderBarModule,
    ButtonModule,
    RouterModule.forChild([
      { path: '', component: HomeComponent }
    ])
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
