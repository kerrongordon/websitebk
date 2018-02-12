import { Component, OnInit, Input } from '@angular/core'
import { Email } from '@interface/email'

@Component({
  selector: 'kgp-admin-side-bar-item-message',
  templateUrl: './admin-side-bar-item-message.component.html',
  styleUrls: ['./admin-side-bar-item-message.component.sass']
})
export class AdminSideBarItemMessageComponent implements OnInit {

  @Input() data: Email

  constructor() { }

  ngOnInit() {
  }

}
