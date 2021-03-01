import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WarmLeadsPage } from './warm-leads.page';

describe('WarmLeadsPage', () => {
  let component: WarmLeadsPage;
  let fixture: ComponentFixture<WarmLeadsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarmLeadsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WarmLeadsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
