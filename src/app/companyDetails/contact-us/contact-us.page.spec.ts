import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContactUSPage } from './contact-us.page';

describe('ContactUSPage', () => {
  let component: ContactUSPage;
  let fixture: ComponentFixture<ContactUSPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactUSPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactUSPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
