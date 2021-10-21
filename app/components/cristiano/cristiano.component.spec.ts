import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CristianoComponent } from './cristiano.component';

describe('CristianoComponent', () => {
  let component: CristianoComponent;
  let fixture: ComponentFixture<CristianoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CristianoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CristianoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
