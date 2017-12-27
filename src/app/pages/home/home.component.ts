import { Component, OnInit, OnDestroy } from '@angular/core'
import { DescriptionService, Description } from '../../services/description/description.service'
import { SkillsService, Skills } from '../../services/skills/skills.service'
import { Subscription } from 'rxjs/Subscription'
import { ProjectService } from '../../services/project/project.service'
import { Project } from '../../interface/Project'

@Component({
  selector: 'kgp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
  providers: [DescriptionService, SkillsService, ProjectService]
})
export class HomeComponent implements OnInit, OnDestroy {

  des: Description
  skillsInit: Skills[]
  projectsInit: Project[]

  private desSub: Subscription
  private skillSub: Subscription
  private projectSub: Subscription

  constructor(
    private _ds: DescriptionService,
    private _ss: SkillsService,
    private _ps: ProjectService
  ) { }

  ngOnInit() {
    this.loadDes()
    this.loadSkills()
    this.loadProjects()
  }

  loadProjects() {
    return this.projectSub = this._ps.loadListOfProjects()
      .subscribe(data => this.projectsInit = data.reverse().slice(0, 4))
  }

  loadSkills() {
    return this.skillSub = this._ss.loadListOfSkills()
      .subscribe(data => this.skillsInit = data)
  }

  loadDes() {
    return this.desSub = this._ds.loadDes()
      .subscribe(data => this.des = data)
  }

  ngOnDestroy() {
    this.desSub.unsubscribe()
    this.skillSub.unsubscribe()
    this.projectSub.unsubscribe()
  }

}
