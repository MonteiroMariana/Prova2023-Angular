import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadEmpresaComponent } from './cad-empresa.component';

describe('CadEmpresaComponent', () => {
  let component: CadEmpresaComponent;
  let fixture: ComponentFixture<CadEmpresaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadEmpresaComponent]
    });
    fixture = TestBed.createComponent(CadEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
