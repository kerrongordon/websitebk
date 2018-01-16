import { Component, Input, ChangeDetectionStrategy } from '@angular/core'
import { fadeInOutImg } from '@exports/animations'
import { Imagen } from '@interface/Project'

@Component({
  selector: 'kgp-card-image',
  templateUrl: './card-image.component.html',
  styleUrls: ['./card-image.component.sass'],
  animations: [fadeInOutImg],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardImageComponent {
  @Input() alt: string
  @Input() data: Imagen

  fadeInState = 'in'
  fadeOutState = 'out'

  imgeLoad() {
    this.fadeInState = 'out'
    this.fadeOutState = 'in'
  }

}
