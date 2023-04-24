import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganiztionsComponent } from './organiztions.component';

describe('OrganiztionsComponent', () => {
  let component: OrganiztionsComponent;
  let fixture: ComponentFixture<OrganiztionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganiztionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganiztionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
