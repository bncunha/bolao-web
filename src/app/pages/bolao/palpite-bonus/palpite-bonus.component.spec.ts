import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalpiteBonusComponent } from './palpite-bonus.component';

describe('PalpiteBonusComponent', () => {
  let component: PalpiteBonusComponent;
  let fixture: ComponentFixture<PalpiteBonusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalpiteBonusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PalpiteBonusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
