import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpProductComponent } from './cp-product.component';

describe('CpProductComponent', () => {
  let component: CpProductComponent;
  let fixture: ComponentFixture<CpProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CpProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
