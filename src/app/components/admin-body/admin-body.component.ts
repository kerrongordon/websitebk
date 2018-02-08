import { Component, OnInit, Input, OnChanges } from '@angular/core'
import { Project } from '@interface/Project'
import { Email } from '@interface/email'

@Component({
  selector: 'kgp-admin-body',
  templateUrl: './admin-body.component.html',
  styleUrls: ['./admin-body.component.sass']
})
export class AdminBodyComponent implements OnInit, OnChanges {

  @Input() projectData: Project
  @Input() messageData: Email

  projectForm: Project

  constructor() { }

  ngOnChanges() {
    console.log('projectData ', this.projectData)
    console.log('messageData ', this.messageData)
  }

  ngOnInit() {
  }

  onSubmit(data, valid) {
    console.log('update ', data, valid)
  }

}
