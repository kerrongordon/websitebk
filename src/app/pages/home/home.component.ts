import { Component } from '@angular/core'
import { DescriptionService } from '@services/description/description.service'
import { SkillsService } from '@services/skills/skills.service'
import { ProjectService } from '@services/project/project.service'
import { SocialLink } from '@interface/social'

@Component({
  selector: 'kgp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  providers: [DescriptionService, SkillsService, ProjectService]
})
export class HomeComponent {
  socialLink: SocialLink[] = [
    { link: 'https://www.facebook.com/kerron.gordon', title: 'facebook' },
    { link: 'https://twitter.com/kerrongordon', title: 'twitter' },
    { link: 'https://plus.google.com/+kerrongordon', title: 'googleplus' },
    { link: 'https://www.linkedin.com/in/kerrongordon', title: 'linkedin' },
    { link: 'https://github.com/kerrongordon', title: 'github' },
    { link: 'https://www.instagram.com/gordonkerron', title: 'instagram' }
  ]

  constructor(
    public _ds: DescriptionService,
    public _ss: SkillsService,
    public _ps: ProjectService
  ) { }

}
