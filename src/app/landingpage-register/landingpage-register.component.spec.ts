import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingpageRegisterComponent } from './landingpage-register.component';

describe('LandingpageRegisterComponent', () => {
  let component: LandingpageRegisterComponent;
  let fixture: ComponentFixture<LandingpageRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandingpageRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingpageRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
