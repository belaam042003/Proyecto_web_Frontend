import { ComponentFixture, TestBed } from '@angular/core/testing';

import { inicialResenasComponent } from './inicialResenas.component';

describe('InicialComponent', () => {
  let component: inicialResenasComponent;
  let fixture: ComponentFixture<inicialResenasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [inicialResenasComponent]
    });
    fixture = TestBed.createComponent(inicialResenasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
function beforeEach(arg0: () => void) {
  throw new Error('Function not implemented.');
}

