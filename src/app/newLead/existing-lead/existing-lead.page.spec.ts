import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExistingLeadPage } from './existing-lead.page';

describe('ExistingLeadPage', () => {
  let component: ExistingLeadPage;
  let fixture: ComponentFixture<ExistingLeadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExistingLeadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExistingLeadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
