import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalJourney } from './professional-journey';

describe('ProfessionalJourney', () => {
  let component: ProfessionalJourney;
  let fixture: ComponentFixture<ProfessionalJourney>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfessionalJourney]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionalJourney);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
