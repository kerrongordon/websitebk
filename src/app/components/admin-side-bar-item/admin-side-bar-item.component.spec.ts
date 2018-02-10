import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { AdminSideBarItemComponent } from './admin-side-bar-item.component'

describe('AdminSideBarItemComponent', () => {
  let component: AdminSideBarItemComponent
  let fixture: ComponentFixture<AdminSideBarItemComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSideBarItemComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSideBarItemComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
