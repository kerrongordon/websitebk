import { Component, OnInit } from '@angular/core'
import { ProjectService } from '@services/project/project.service'
import { Observable } from 'rxjs/Observable'
import { Project } from '@interface/Project'

@Component({
  selector: 'kgp-manage-projects',
  templateUrl: './manage-projects.component.html',
  styleUrls: ['./manage-projects.component.sass'],
  providers: [ProjectService]
})
export class ManageProjectsComponent implements OnInit {
  projects: Observable<Project[]>

  constructor(
    private _ps: ProjectService
  ) { }

  ngOnInit() {
    this.projects = this._ps.loadListOfProjects()
  }

}
