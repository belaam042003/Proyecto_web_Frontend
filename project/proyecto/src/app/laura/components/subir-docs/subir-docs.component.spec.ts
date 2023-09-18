import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SubirDocsComponent } from './subir-docs.component';

describe('SubirDocsComponent', () => {
  let component: SubirDocsComponent;
  let fixture: ComponentFixture<SubirDocsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubirDocsComponent]
    });
    fixture = TestBed.createComponent(SubirDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
