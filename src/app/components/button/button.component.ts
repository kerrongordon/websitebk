import {Component, EventEmitter, Input, Output} from '@angular/core'

@Component({
  selector: 'kgp-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass']
})
export class ButtonComponent {

  @Input() icon: string
  @Input() type: string
  @Input() disabled: boolean
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>()

  handleClick(event: any) {
    this.onClick.emit(event)
  }

}
