import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformarResultadosComponent } from './informar-resultados.component';

describe('InformarResultadosComponent', () => {
  let component: InformarResultadosComponent;
  let fixture: ComponentFixture<InformarResultadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformarResultadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformarResultadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
