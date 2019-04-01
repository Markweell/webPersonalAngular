import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosFormacionComponent } from './cursos-formacion.component';

describe('CursosFormacionComponent', () => {
  let component: CursosFormacionComponent;
  let fixture: ComponentFixture<CursosFormacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursosFormacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosFormacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
