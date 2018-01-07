import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'kgp-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.sass']
})
export class IconsComponent implements OnInit {

  @Input() icon: string

  constructor() { }

  ngOnInit() {
  }

}
