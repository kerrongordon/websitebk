import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSideBarItemMessageComponent } from './admin-side-bar-item-message.component';

describe('AdminSideBarItemMessageComponent', () => {
  let component: AdminSideBarItemMessageComponent;
  let fixture: ComponentFixture<AdminSideBarItemMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSideBarItemMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSideBarItemMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
