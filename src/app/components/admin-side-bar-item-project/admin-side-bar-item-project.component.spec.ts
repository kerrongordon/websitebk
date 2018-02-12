import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSideBarItemProjectComponent } from './admin-side-bar-item-project.component';

describe('AdminSideBarItemProjectComponent', () => {
  let component: AdminSideBarItemProjectComponent;
  let fixture: ComponentFixture<AdminSideBarItemProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSideBarItemProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSideBarItemProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
