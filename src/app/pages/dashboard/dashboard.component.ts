import { Component, OnInit, OnDestroy } from '@angular/core'
import { ProjectService } from '@services/project/project.service'
import { SkillsService, Skills } from '@services/skills/skills.service'
import { Subscription } from 'rxjs/Subscription'
import { MessagesService } from '@services/messages/messages.service'
import { Project } from '@interface/Project'
import { Observable } from 'rxjs/Observable'
import { Email } from '@interface/email'

@Component({
  selector: 'kgp-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass'],
  providers: [ProjectService, SkillsService, MessagesService]
})
export class DashboardComponent implements OnInit, OnDestroy {

  skills: Observable<Skills[]>
  projects: Observable<Project[]>
  messages: Observable<Email[]>

  toggleSkills = -1

  constructor(
    private _ps: ProjectService,
    private _ss: SkillsService,
    private _ms: MessagesService
  ) { }

  ngOnInit() {
    this.skills = this._ss.loadSkills()
    this.messages = this._ms.loadMessage()
    this.projects = this._ps.loadListOfProjects()
  }

  updateSkill(id: string, title: string, level: number) {
    const ids = id.toString()
    const data: Skills = { title, level }
    console.log(data)
    return this._ss.updateSkill(ids, data)
  }

  editSkill(id) {
    return this.toggleSkills = id
  }

  ngOnDestroy() {

  }

}
