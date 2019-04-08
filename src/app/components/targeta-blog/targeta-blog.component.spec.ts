import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetaBlogComponent } from './targeta-blog.component';

describe('TargetaBlogComponent', () => {
  let component: TargetaBlogComponent;
  let fixture: ComponentFixture<TargetaBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TargetaBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetaBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
