import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewLeadPage } from './new-lead.page';

describe('NewLeadPage', () => {
  let component: NewLeadPage;
  let fixture: ComponentFixture<NewLeadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewLeadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewLeadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
