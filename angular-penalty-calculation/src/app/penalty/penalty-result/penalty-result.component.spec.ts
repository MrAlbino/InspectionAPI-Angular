import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenaltyResultComponent } from './penalty-result.component';

describe('PenaltyResultComponent', () => {
  let component: PenaltyResultComponent;
  let fixture: ComponentFixture<PenaltyResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PenaltyResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PenaltyResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
