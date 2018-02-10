import { Component, OnInit, OnDestroy } from '@angular/core'
import { ProjectService } from '@services/project/project.service'
import { ActivatedRoute } from '@angular/router'
import { Subscription } from 'rxjs/Subscription'
import { Project } from '@interface/Project'
import { Observable } from 'rxjs/Observable'
import { SeoService } from '@services/seo/seo.service'
import { take } from 'rxjs/operator/take'

@Component({
  selector: 'kgp-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.sass'],
  providers: [ProjectService, SeoService]
})
export class ProjectComponent implements OnInit, OnDestroy {

  private reload: Subscription
  private ids: string
  project: Observable<Project>

  constructor(
    private _avr: ActivatedRoute,
    private _ps: ProjectService,
    private seo: SeoService
  ) {  }

  ngOnInit() {
    this.pageReload()
  }

  pageReload() {
    return this.reload = this._avr.params.subscribe(() => this.getPageId())
  }

  getPageId() {
    this.ids = this._avr.snapshot.params['id']
    this.project = this._ps.getProjectById(this.ids)
    return this.metaLoad()
  }

  metaLoad() {
    return this.project.take(1).subscribe(data => {
      const str = data.content
      return this.seo.generateTags({
        title: `${data.title} | Kerron Gordon`,
        description: str.slice(1, 150),
        image: data.image.big.url,
        slug: `project/${data.id}`
      })
    })
  }

  ngOnDestroy() {
    this.metaLoad().unsubscribe()
    this.reload.unsubscribe()
  }

}
