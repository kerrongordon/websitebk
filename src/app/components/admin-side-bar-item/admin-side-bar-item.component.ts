import { Component, OnInit, Input } from '@angular/core'
import { Project } from '@interface/Project'
import { Email } from '@interface/email'

@Component({
  selector: 'kgp-admin-side-bar-item',
  templateUrl: './admin-side-bar-item.component.html',
  styleUrls: ['./admin-side-bar-item.component.sass']
})
export class AdminSideBarItemComponent implements OnInit {

  @Input() projectData: Project
  @Input() emailData: Email

  constructor() { }

  ngOnInit() {
  }

}
