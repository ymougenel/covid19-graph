import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaminatedGraphComponent } from './contaminated-graph.component';

describe('ContaminatedGraphComponent', () => {
  let component: ContaminatedGraphComponent;
  let fixture: ComponentFixture<ContaminatedGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContaminatedGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContaminatedGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
