import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursosCompartidosComponent } from './recursos-compartidos.component';

describe('RecursosCompartidosComponent', () => {
  let component: RecursosCompartidosComponent;
  let fixture: ComponentFixture<RecursosCompartidosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecursosCompartidosComponent]
    });
    fixture = TestBed.createComponent(RecursosCompartidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
