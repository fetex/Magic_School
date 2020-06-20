import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { House1Page } from './house1.page';

describe('House1Page', () => {
  let component: House1Page;
  let fixture: ComponentFixture<House1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ House1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(House1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
