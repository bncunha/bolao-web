import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidasAovivoComponent } from './partidas-aovivo.component';

describe('PartidasAovivoComponent', () => {
  let component: PartidasAovivoComponent;
  let fixture: ComponentFixture<PartidasAovivoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartidasAovivoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartidasAovivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
