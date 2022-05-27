import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesarrolloDeAplicacionesComponent } from './desarrollo-de-aplicaciones.component';

describe('DesarrolloDeAplicacionesComponent', () => {
  let component: DesarrolloDeAplicacionesComponent;
  let fixture: ComponentFixture<DesarrolloDeAplicacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesarrolloDeAplicacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DesarrolloDeAplicacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
