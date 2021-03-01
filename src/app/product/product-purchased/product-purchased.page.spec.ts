import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProductPurchasedPage } from './product-purchased.page';

describe('ProductPurchasedPage', () => {
  let component: ProductPurchasedPage;
  let fixture: ComponentFixture<ProductPurchasedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductPurchasedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductPurchasedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
