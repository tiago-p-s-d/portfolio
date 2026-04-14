import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgLights } from './bg-lights';

describe('BgLights', () => {
  let component: BgLights;
  let fixture: ComponentFixture<BgLights>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BgLights]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BgLights);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
