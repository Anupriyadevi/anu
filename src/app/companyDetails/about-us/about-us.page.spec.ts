import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AboutUSPage } from './about-us.page';

describe('AboutUSPage', () => {
  let component: AboutUSPage;
  let fixture: ComponentFixture<AboutUSPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutUSPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AboutUSPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
