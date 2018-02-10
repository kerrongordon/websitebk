import { Component, OnInit, Input, OnChanges } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Project } from '@interface/Project'
import { Email } from '@interface/email'

@Component({
  selector: 'kgp-admin-body',
  templateUrl: './admin-body.component.html',
  styleUrls: ['./admin-body.component.sass']
})
export class AdminBodyComponent implements OnInit, OnChanges {

  @Input() projectData: Project = null
  @Input() messageData: Email = null

  toggleEditView = true

  noDataIcon = ''
  noDatatitle = ''

  constructor(
    private _rt: Router
  ) { }

  ngOnChanges() {
    console.log('projectData ', this.projectData)
    console.log('messageData ', this.messageData)
    if (this._rt.url === '/manageprojects/all') { this.pro() }
    if (this._rt.url === '/messages/all') { this.mess() }
  }

  ngOnInit() {

  }

  pro() {
    this.noDataIcon = 'ion-ios-filing-outline'
    this.noDatatitle = 'No Project Selected'
  }

  mess() {
    this.noDataIcon = 'ion-ios-email-outline'
    this.noDatatitle = 'No Message Selected'
  }

  onSubmit(data, valid) {
    console.log('update ', data, valid)
  }

}
