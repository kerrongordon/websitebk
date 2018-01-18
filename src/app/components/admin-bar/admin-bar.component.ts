import { Component } from '@angular/core'
import { AuthService } from '@services/auth/auth.service'

@Component({
  selector: 'kgp-admin-bar',
  templateUrl: './admin-bar.component.html',
  styleUrls: ['./admin-bar.component.sass'],
  providers: [AuthService]
})
export class AdminBarComponent {

  addminbar = [
    { title: 'Dashboard', icon: 'ion-ios-analytics-outline', link: '/admin' },
    { title: 'Message', icon: 'ion-ios-chatboxes-outline', link: '/message' },
    { title: 'Add Project', icon: 'ion-ios-compose-outline', link: '/addproject' },
    { title: 'Projects', icon: 'ion-ios-albums-outline', link: '/manageprojects' }
  ]

  constructor(
    private _as: AuthService
  ) { }

  logout() {
    return this._as.logout()
  }

}
