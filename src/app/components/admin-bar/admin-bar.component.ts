import { Component, Input, OnChanges } from '@angular/core'
import { AuthService } from '@services/auth/auth.service'

@Component({
  selector: 'kgp-admin-bar',
  templateUrl: './admin-bar.component.html',
  styleUrls: ['./admin-bar.component.sass'],
  providers: [AuthService]
})
export class AdminBarComponent implements OnChanges {

  @Input() pLink = '/manageprojects/all'
  @Input() mLink = '/messages/all'
  addminbar: { title: string; icon: string; link: string; }[]

  constructor(
    private _as: AuthService
  ) {
    this.adminBarIcons()
   }

  ngOnChanges() {
    this.adminBarIcons()
  }

  adminBarIcons() {
    return this.addminbar = [
      { title: 'Dashboard', icon: 'ion-ios-analytics-outline', link: '/admin' },
      { title: 'Messages', icon: 'ion-ios-chatboxes-outline', link: this.mLink },
      { title: 'Add Project', icon: 'ion-ios-compose-outline', link: '/addproject' },
      { title: 'Add Post', icon: 'ion-ios-compose-outline', link: '/addpost' },
      { title: 'Projects', icon: 'ion-ios-albums-outline', link: this.pLink }
    ]
  }

  logout() {
    return this._as.logout()
  }

}
