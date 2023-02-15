import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesCardsArrayComponent } from './categories-cards-array.component';

describe('CategoriesCardsArrayComponent', () => {
  let component: CategoriesCardsArrayComponent;
  let fixture: ComponentFixture<CategoriesCardsArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesCardsArrayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesCardsArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
