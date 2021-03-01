import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConvertLeadPage } from './convert-lead.page';

describe('ConvertLeadPage', () => {
  let component: ConvertLeadPage;
  let fixture: ComponentFixture<ConvertLeadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConvertLeadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConvertLeadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
