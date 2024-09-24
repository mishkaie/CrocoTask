import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotProvidersComponent } from './slot-providers.component';

describe('SlotProvidersComponent', () => {
  let component: SlotProvidersComponent;
  let fixture: ComponentFixture<SlotProvidersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlotProvidersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SlotProvidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
