import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartidaBoxComponent } from './partida-box.component';

describe('PartidaBoxComponent', () => {
  let component: PartidaBoxComponent;
  let fixture: ComponentFixture<PartidaBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartidaBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartidaBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
