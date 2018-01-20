import { Component, OnInit } from '@angular/core'
import { ProjectService } from '@services/project/project.service'
import { Project } from '@interface/Project'
import { Observable } from 'rxjs/Observable'
import { SeoService } from '@services/seo/seo.service'

@Component({
  selector: 'kgp-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass'],
  providers: [ProjectService, SeoService]
})
export class ProjectsComponent implements OnInit {

  projects: Observable<Project[]>

  constructor(
    private _ps: ProjectService,
    private seo: SeoService
  ) { }

  ngOnInit() {
    this.metaLoad()
    this.projects = this._ps.loadListOfProjects()
  }

  metaLoad() {
    return this.seo.generateTags({
      title: 'Projects | Kerron Gordon',
      description: 'Kerron specializes in making exceptional websites',
      image: 'https://kerron-gordon.firebaseapp.com/assets/desktop.jpeg',
      slug: 'projects'
    })
  }

}
