import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRecursosComponent } from './form-recursos.component';

describe('FormRecursosComponent', () => {
  let component: FormRecursosComponent;
  let fixture: ComponentFixture<FormRecursosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormRecursosComponent]
    });
    fixture = TestBed.createComponent(FormRecursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
