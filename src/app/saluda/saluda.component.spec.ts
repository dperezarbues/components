import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaludaComponent } from './saluda.component';

describe('SaludaComponent', () => {
  let component: SaludaComponent;
  let fixture: ComponentFixture<SaludaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaludaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaludaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
