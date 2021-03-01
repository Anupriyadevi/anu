import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ColdLeadsPage } from './cold-leads.page';

describe('ColdLeadsPage', () => {
  let component: ColdLeadsPage;
  let fixture: ComponentFixture<ColdLeadsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColdLeadsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ColdLeadsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
