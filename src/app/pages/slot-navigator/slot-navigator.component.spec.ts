import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotNavigatorComponent } from './slot-navigator.component';

describe('SlotNavigatorComponent', () => {
  let component: SlotNavigatorComponent;
  let fixture: ComponentFixture<SlotNavigatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlotNavigatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SlotNavigatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
