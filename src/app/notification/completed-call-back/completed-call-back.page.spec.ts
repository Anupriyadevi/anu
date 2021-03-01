import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompletedCallBackPage } from './completed-call-back.page';

describe('CompletedCallBackPage', () => {
  let component: CompletedCallBackPage;
  let fixture: ComponentFixture<CompletedCallBackPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedCallBackPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompletedCallBackPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
