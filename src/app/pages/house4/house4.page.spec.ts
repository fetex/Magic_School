import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { House4Page } from './house4.page';

describe('House4Page', () => {
  let component: House4Page;
  let fixture: ComponentFixture<House4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ House4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(House4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
