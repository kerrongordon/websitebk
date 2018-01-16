import { Component, OnInit, OnDestroy } from '@angular/core'
import { ProjectService } from '@services/project/project.service'
import { ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs/Subscription'
import { fadeInOutImg } from '@exports/animations'
import { Project } from '@interface/Project'
import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'kgp-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.sass'],
  providers: [ProjectService],
  animations: [fadeInOutImg],
})
export class ProjectComponent implements OnInit, OnDestroy {

  private reload: Subscription
  private ids: string
  project: Observable<Project>

  fadeInState = 'in'
  fadeOutState = 'out'

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
    this.fadeInState = 'in'
    this.fadeOutState = 'out'
    this.ids = this._avr.snapshot.params['id']
    return this.project = this._ps.getProjectById(this.ids)
  }

  isImgeLoad() {
    this.fadeInState = 'out'
    this.fadeOutState = 'in'
  }

  ngOnDestroy() {
    this.reload.unsubscribe()
  }

}
