import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemEmployeesComponent } from './system-employees.component';

describe('SystemEmployeesComponent', () => {
  let component: SystemEmployeesComponent;
  let fixture: ComponentFixture<SystemEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SystemEmployeesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
