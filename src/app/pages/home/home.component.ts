import { Component, OnInit, OnDestroy } from '@angular/core'
import { DescriptionService } from '@services/description/description.service'
import { SkillsService } from '@services/skills/skills.service'
import { Subscription } from 'rxjs/Subscription'
import { ProjectService } from '@services/project/project.service'
import { Project } from '@interface/Project'
import { SocialLink } from '@interface/social'

@Component({
  selector: 'kgp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  providers: [DescriptionService, SkillsService, ProjectService]
})
export class HomeComponent implements OnInit, OnDestroy {
  projectsInit: Project[]
  private projectSub: Subscription

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
    private _ps: ProjectService
  ) { }

  ngOnInit() {
    this.loadProjects()
  }

  loadProjects() {
    return this.projectSub = this._ps.loadListOfProjects()
      .subscribe(data => this.projectsInit = data.reverse().slice(0, 4))
  }

  ngOnDestroy() {
    this.projectSub.unsubscribe()
  }

}
