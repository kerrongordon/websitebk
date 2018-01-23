import { Component, OnInit, OnDestroy } from '@angular/core'
import { Email } from '@interface/email'
import { Project } from '@interface/Project'
import { Observable } from 'rxjs/Observable'
import { Subscription } from 'rxjs/Subscription'
import { ProjectService } from '@services/project/project.service'
import { SkillsService, Skills } from '@services/skills/skills.service'
import { MessagesService } from '@services/messages/messages.service'
import { DescriptionService, Description } from '@services/description/description.service'

@Component({
  selector: 'kgp-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'],
  providers: [ProjectService, SkillsService, MessagesService, DescriptionService]
})
export class DashboardComponent implements OnInit, OnDestroy {

  skills: Observable<Skills[]>
  projects: Observable<Project[]>
  messages: Observable<Email[]>
  description: Observable<Description>

  toggleSkills = -1
  toggleDes = false

  constructor(
    private _ps: ProjectService,
    private _ss: SkillsService,
    private _ms: MessagesService,
    private _ds: DescriptionService
  ) { }

  ngOnInit() {
    this.skills = this._ss.loadSkills()
    this.description = this._ds.loadDes()
    this.messages = this._ms.loadMessage()
    this.projects = this._ps.loadListOfProjects()
  }

  updateSkill(id: string, title: string, level: number) {
    const ids = id.toString()
    const data: Skills = { title, level }
    return this._ss.updateSkill(ids, data)
  }

  editSkill(id) {
    return this.toggleSkills = id
  }

  updateDes(data) {
    const dat: Description = { content: data }
    return this._ds.updateDes(dat)
  }

  ngOnDestroy() {

  }

}
