import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBolaoComponent } from './menu-bolao.component';

describe('MenuBolaoComponent', () => {
  let component: MenuBolaoComponent;
  let fixture: ComponentFixture<MenuBolaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuBolaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuBolaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
