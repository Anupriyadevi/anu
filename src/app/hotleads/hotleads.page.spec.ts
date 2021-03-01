import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HotleadsPage } from './hotleads.page';

describe('HotleadsPage', () => {
  let component: HotleadsPage;
  let fixture: ComponentFixture<HotleadsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotleadsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HotleadsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
