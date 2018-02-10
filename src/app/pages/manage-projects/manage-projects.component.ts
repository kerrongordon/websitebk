import { Component, OnInit, OnDestroy } from '@angular/core'
import { ProjectService } from '@services/project/project.service'
import { ActivatedRoute, Router } from '@angular/router'
import { Observable } from 'rxjs/Observable'
import { Project } from '@interface/Project'
import { Subscription } from 'rxjs/Subscription'

@Component({
  selector: 'kgp-manage-projects',
  templateUrl: './manage-projects.component.html',
  styleUrls: ['./manage-projects.component.sass'],
  providers: [ProjectService]
})
export class ManageProjectsComponent implements OnInit, OnDestroy {
  ids: string
  pageurl: Subscription
  project: Observable<Project>
  projects: Observable<Project[]>

  toggleDelete = false

  constructor(
    private _ps: ProjectService,
    private _avr: ActivatedRoute,
    private _rt: Router
  ) { }

  ngOnInit() {
    this.loadData()
    this.loadurl()
  }

  loadData() {
    return this.projects = this._ps.loadListOfProjects()
  }

  loadurl() {
    return this.pageurl = this._avr.params.subscribe(() => {
      this.ids = this._avr.snapshot.params['id']
      if (this.ids === 'all') { return }
      return this.project = this._ps.getProjectById(this.ids)
    })
  }

  deleteItem(id) {
    return this._ps.deleteProject(id)
    .then(e => {
      this.toggleDelete = !this.toggleDelete
      this._rt.navigate(['/manageprojects/all'])
    })
    .catch(error => {
      console.log(error)
      this._rt.navigate(['/manageprojects/all'])
    })
  }

  ngOnDestroy() {
    if (this.ids !== undefined) { return this.pageurl.unsubscribe() }
  }

}
