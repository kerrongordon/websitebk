import { Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Project } from '@interface/Project'
import { Email } from '@interface/email'

@Component({
  selector: 'kgp-admin-body',
  templateUrl: './admin-body.component.html',
  styleUrls: ['./admin-body.component.sass']
})
export class AdminBodyComponent implements OnInit, OnChanges, OnDestroy {

  noProjectTimeOut: any

  @Input() projectData: Project = null
  @Input() messageData: Email = null

  toggleEditView = true

  projecttogg = false
  messagetogg = false

  noDataIcon = ''
  noDatatitle = ''

  constructor(
    private _rt: Router
  ) { }

  ngOnChanges() {
    console.log('projectData ', this.projectData)
    console.log('messageData ', this.messageData)

    if (this._rt.url === '/manageprojects/all') {
      this.pro() } else {
      this.projecttogg = !this.projecttogg
    }
    if (this._rt.url === '/messages/all') {
      this.mess() } else {
      this.messagetogg = !this.messagetogg
    }
  }

  ngOnInit() {

  }

  pro() {
    return this.noProjectTimeOut = setTimeout(() => {
      this.noDataIcon = 'ion-ios-filing-outline'
      this.noDatatitle = 'No Project Selected'
      this.projecttogg = !this.projecttogg
    }, 500)
  }

  mess() {
    this.noDataIcon = 'ion-ios-email-outline'
    this.noDatatitle = 'No Message Selected'
    this.messagetogg = !this.messagetogg
  }

  onSubmit(data, valid) {
    console.log('update ', data, valid)
  }

  ngOnDestroy() {
    clearTimeout(this.noProjectTimeOut)
  }

}
