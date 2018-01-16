import { Component, OnInit } from '@angular/core'
import { ProjectService } from '@services/project/project.service'
import { Project } from '@interface/Project'
import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'kgp-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass'],
  providers: [ProjectService]
})
export class ProjectsComponent implements OnInit {

  projects: Observable<Project[]>

  constructor(private _ps: ProjectService) { }

  ngOnInit() {
    this.projects = this._ps.loadListOfProjects()
  }

}
