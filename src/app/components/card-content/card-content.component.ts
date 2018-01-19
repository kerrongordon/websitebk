import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core'
import { Project } from '@interface/Project'

@Component({
  selector: 'kgp-card-content',
  templateUrl: './card-content.component.html',
  styleUrls: ['./card-content.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardContentComponent implements OnInit {
  @Input() data: Project
  monthS: string

  ngOnInit() {
    this.constr()
  }

  private constr() {
    if (!this.data) { return }
    if (!this.data.timestamp.month) { return }
    const mk = this.data.timestamp.month.slice(0, 3)
    return this.monthS = mk
  }

}
