import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarBolaoComponent } from './criar-bolao.component';

describe('CriarBolaoComponent', () => {
  let component: CriarBolaoComponent;
  let fixture: ComponentFixture<CriarBolaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarBolaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarBolaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
