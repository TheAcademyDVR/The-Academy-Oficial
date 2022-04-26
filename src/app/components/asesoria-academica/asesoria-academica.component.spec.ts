import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsesoriaAcademicaComponent } from './asesoria-academica.component';

describe('AsesoriaAcademicaComponent', () => {
  let component: AsesoriaAcademicaComponent;
  let fixture: ComponentFixture<AsesoriaAcademicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsesoriaAcademicaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsesoriaAcademicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
