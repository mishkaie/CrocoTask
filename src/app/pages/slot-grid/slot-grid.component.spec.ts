import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotGridComponent } from './slot-grid.component';

describe('SlotGridComponent', () => {
  let component: SlotGridComponent;
  let fixture: ComponentFixture<SlotGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlotGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlotGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
