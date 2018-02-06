import { Component, OnInit, OnDestroy } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { MessagesService } from '@services/messages/messages.service'
import { Observable } from 'rxjs/Observable'
import { Email } from '@interface/email'
import { Subscription } from 'rxjs/Subscription'


@Component({
  selector: 'kgp-manage-messages',
  templateUrl: './manage-messages.component.html',
  styleUrls: ['./manage-messages.component.sass'],
  providers: [MessagesService]
})
export class ManageMessagesComponent implements OnInit, OnDestroy {
  ids: string
  pageurl: Subscription
  message: Observable<Email>
  messages: Observable<Email[]>

  constructor(
    private _ms: MessagesService,
    private _avr: ActivatedRoute
  ) { }

  ngOnInit() {
    this.loadData()
    this.loadurl()
  }

  loadData() {
    return this.messages = this._ms.loadMessage()
  }

  loadurl() {
    return this.pageurl = this._avr.params.subscribe(() => {
      this.ids = this._avr.snapshot.params['id']
      if (this.ids === 'all') { return }
      return this.message = this._ms.openMessage(this.ids)
    })
  }

  ngOnDestroy() {
    if (this.ids !== undefined) { return this.pageurl.unsubscribe() }
  }

}
