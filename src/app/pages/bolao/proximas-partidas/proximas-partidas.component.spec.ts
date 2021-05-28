import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProximasPartidasComponent } from './proximas-partidas.component';

describe('ProximasPartidasComponent', () => {
  let component: ProximasPartidasComponent;
  let fixture: ComponentFixture<ProximasPartidasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProximasPartidasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProximasPartidasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
