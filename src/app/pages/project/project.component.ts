import { Component, OnInit, OnDestroy } from '@angular/core'
import { ProjectService } from '@services/project/project.service'
import { ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs/Subscription'
import { Project } from '@interface/Project'
import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'kgp-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.sass'],
  providers: [ProjectService]
})
export class ProjectComponent implements OnInit, OnDestroy {

  private reload: Subscription
  private ids: string
  project: Observable<Project>

  constructor(
    private _avr: ActivatedRoute,
    public _ps: ProjectService
  ) {  }

  ngOnInit() {
    this.pageReload()
  }

  pageReload() {
    return this.reload = this._avr.params.subscribe(() => this.getPageId())
  }

  getPageId() {
    this.ids = this._avr.snapshot.params['id']
    return this.project = this._ps.getProjectById(this.ids)
  }

  ngOnDestroy() {
    this.reload.unsubscribe()
  }

}
