import { Component, Input, OnChanges } from '@angular/core'
import { AuthService } from '@services/auth/auth.service'

@Component({
  selector: 'kgp-admin-bar',
  templateUrl: './admin-bar.component.html',
  styleUrls: ['./admin-bar.component.sass'],
  providers: [AuthService]
})
export class AdminBarComponent implements OnChanges {
  @Input() link = '/manageprojects/all'
  addminbar: { title: string; icon: string; link: string; }[]

  constructor(
    private _as: AuthService
  ) {
    this.addminbar = [
      { title: 'Dashboard', icon: 'ion-ios-analytics-outline', link: '/admin' },
      { title: 'Message', icon: 'ion-ios-chatboxes-outline', link: '/message' },
      { title: 'Add Project', icon: 'ion-ios-compose-outline', link: '/addproject' },
      { title: 'Projects', icon: 'ion-ios-albums-outline', link: this.link }
    ]
   }

  ngOnChanges() {
    this.addminbar = [
      { title: 'Dashboard', icon: 'ion-ios-analytics-outline', link: '/admin' },
      { title: 'Message', icon: 'ion-ios-chatboxes-outline', link: '/message' },
      { title: 'Add Project', icon: 'ion-ios-compose-outline', link: '/addproject' },
      { title: 'Projects', icon: 'ion-ios-albums-outline', link: this.link }
    ]
  }

  logout() {
    return this._as.logout()
  }

}
