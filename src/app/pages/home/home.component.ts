import { Component, OnInit } from '@angular/core'
import { DescriptionService, Description } from '@services/description/description.service'
import { SkillsService, Skills } from '@services/skills/skills.service'
import { ProjectService } from '@services/project/project.service'
import { SocialLink } from '@interface/social'
import { Observable } from 'rxjs/Observable'
import { Project } from '@interface/Project'
import { SeoService } from '@services/seo/seo.service'

@Component({
  selector: 'kgp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  providers: [DescriptionService, SkillsService, ProjectService, SeoService]
})
export class HomeComponent implements OnInit {

  skills: Observable<Skills[]>
  projects: Observable<Project[]>
  description: Observable<Description>

  socialLink: SocialLink[] = [
    { link: 'https://www.facebook.com/kerron.gordon', title: 'facebook' },
    { link: 'https://twitter.com/kerrongordon', title: 'twitter' },
    { link: 'https://plus.google.com/+kerrongordon', title: 'googleplus' },
    { link: 'https://www.linkedin.com/in/kerrongordon', title: 'linkedin' },
    { link: 'https://github.com/kerrongordon', title: 'github' },
    { link: 'https://www.instagram.com/gordonkerron', title: 'instagram' }
  ]

  constructor(
    private _ds: DescriptionService,
    private _ss: SkillsService,
    private _ps: ProjectService,
    private seo: SeoService
  ) { }

  ngOnInit() {
    this.metaLoad()
    this.skills = this._ss.loadSkills()
    this.description = this._ds.loadDes()
    this.projects = this._ps.loadProjectsHome()
  }

  metaLoad() {
    return this.seo.generateTags({
      title: 'Contact Page',
      description: 'Contact me through this awesome search engine optimized Angular component',
      image: 'https://instafire-app.firebaseapp.com/assets/meerkat.jpeg',
      slug: 'contact-page'
    })
  }

}
