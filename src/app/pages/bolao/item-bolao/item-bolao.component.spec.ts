import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemBolaoComponent } from './item-bolao.component';

describe('ItemBolaoComponent', () => {
  let component: ItemBolaoComponent;
  let fixture: ComponentFixture<ItemBolaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemBolaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemBolaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
