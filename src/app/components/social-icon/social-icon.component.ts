import { Component, Input, ChangeDetectionStrategy } from '@angular/core'
import { SocialLink } from '@interface/social'

@Component({
  selector: 'kgp-social-icon',
  templateUrl: './social-icon.component.html',
  styleUrls: ['./social-icon.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SocialIconComponent {
  @Input() links: SocialLink[]
}
