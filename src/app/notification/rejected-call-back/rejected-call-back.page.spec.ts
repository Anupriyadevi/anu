import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RejectedCallBackPage } from './rejected-call-back.page';

describe('RejectedCallBackPage', () => {
  let component: RejectedCallBackPage;
  let fixture: ComponentFixture<RejectedCallBackPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejectedCallBackPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RejectedCallBackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
