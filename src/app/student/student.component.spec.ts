import { ComponentFixture, TestBed } from '@angular/core/testing';

import { STUDENTComponent } from './student.component';

describe('STUDENTComponent', () => {
  let component: STUDENTComponent;
  let fixture: ComponentFixture<STUDENTComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ STUDENTComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(STUDENTComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
