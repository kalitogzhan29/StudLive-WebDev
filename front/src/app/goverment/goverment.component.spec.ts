import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovermentComponent } from './goverment.component';

describe('GovermentComponent', () => {
  let component: GovermentComponent;
  let fixture: ComponentFixture<GovermentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GovermentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GovermentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
