import { Component, OnInit, Input } from '@angular/core'
import { Email } from '@interface/email'
import { Project } from '@interface/Project'

@Component({
  selector: 'kgp-admin-side-bar',
  templateUrl: './admin-side-bar.component.html',
  styleUrls: ['./admin-side-bar.component.sass']
})
export class AdminSideBarComponent implements OnInit {

  @Input() message: Email
  @Input() project: Project

  constructor() { }

  ngOnInit() {
  }

}
