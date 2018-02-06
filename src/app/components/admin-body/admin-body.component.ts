import { Component, OnInit, Input } from '@angular/core'
import { Project } from '@interface/Project'

@Component({
  selector: 'kgp-admin-body',
  templateUrl: './admin-body.component.html',
  styleUrls: ['./admin-body.component.sass']
})
export class AdminBodyComponent implements OnInit {

  @Input() projectData: Project

  constructor() { }

  ngOnInit() {
  }

}
