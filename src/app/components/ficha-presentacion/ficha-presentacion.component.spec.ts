import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaPresentacionComponent } from './ficha-presentacion.component';

describe('FichaPresentacionComponent', () => {
  let component: FichaPresentacionComponent;
  let fixture: ComponentFixture<FichaPresentacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichaPresentacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaPresentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
