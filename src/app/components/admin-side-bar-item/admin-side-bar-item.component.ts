import { Component, OnInit, Input } from '@angular/core'
import { Project } from '@interface/Project'

@Component({
  selector: 'kgp-admin-side-bar-item',
  templateUrl: './admin-side-bar-item.component.html',
  styleUrls: ['./admin-side-bar-item.component.sass']
})
export class AdminSideBarItemComponent implements OnInit {

  @Input() data: Project

  constructor() { }

  ngOnInit() {
  }

}
