import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoloesParticipandoComponent } from './boloes-participando.component';

describe('BoloesParticipandoComponent', () => {
  let component: BoloesParticipandoComponent;
  let fixture: ComponentFixture<BoloesParticipandoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoloesParticipandoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoloesParticipandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
