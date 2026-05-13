import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentChart } from './student-chart';

describe('StudentChart', () => {
  let component: StudentChart;
  let fixture: ComponentFixture<StudentChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentChart],
    }).compileComponents();

    fixture = TestBed.createComponent(StudentChart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
