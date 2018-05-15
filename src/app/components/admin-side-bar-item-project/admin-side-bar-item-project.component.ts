import { Component, Input } from '@angular/core'
import { Project } from '@interface/Project'

@Component({
  selector: 'kgp-admin-side-bar-item-project',
  templateUrl: './admin-side-bar-item-project.component.html',
  styleUrls: ['./admin-side-bar-item-project.component.sass']
})
export class AdminSideBarItemProjectComponent {

  @Input() data: Project

}
