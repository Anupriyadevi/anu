import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomerEnquiryPage } from './customer-enquiry.page';

describe('CustomerEnquiryPage', () => {
  let component: CustomerEnquiryPage;
  let fixture: ComponentFixture<CustomerEnquiryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerEnquiryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerEnquiryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
