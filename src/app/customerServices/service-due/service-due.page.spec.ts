import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ServiceDuePage } from './service-due.page';

describe('ServiceDuePage', () => {
  let component: ServiceDuePage;
  let fixture: ComponentFixture<ServiceDuePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceDuePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ServiceDuePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
