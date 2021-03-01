import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExistingCustomersPage } from './existing-customers.page';

describe('ExistingCustomersPage', () => {
  let component: ExistingCustomersPage;
  let fixture: ComponentFixture<ExistingCustomersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistingCustomersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExistingCustomersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
