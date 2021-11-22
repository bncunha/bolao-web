import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidasFilterComponent } from './partidas-filter.component';

describe('PartidasFilterComponent', () => {
  let component: PartidasFilterComponent;
  let fixture: ComponentFixture<PartidasFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartidasFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartidasFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
