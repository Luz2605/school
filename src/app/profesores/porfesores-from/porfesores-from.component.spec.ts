import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorfesoresFromComponent } from './porfesores-from.component';

describe('PorfesoresFromComponent', () => {
  let component: PorfesoresFromComponent;
  let fixture: ComponentFixture<PorfesoresFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorfesoresFromComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PorfesoresFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
