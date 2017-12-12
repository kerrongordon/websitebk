import { Component, Input, ChangeDetectionStrategy } from '@angular/core'
import { Email } from '../../interface/email'

@Component({
  selector: 'kgp-email-list-item',
  templateUrl: './email-list-item.component.html',
  styleUrls: ['./email-list-item.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmailListItemComponent {
  @Input() data: Email
}
