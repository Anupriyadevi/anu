import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LostLeadsPage } from './lost-leads.page';

describe('LostLeadsPage', () => {
  let component: LostLeadsPage;
  let fixture: ComponentFixture<LostLeadsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LostLeadsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LostLeadsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
