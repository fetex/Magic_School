import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { House3Page } from './house3.page';

describe('House3Page', () => {
  let component: House3Page;
  let fixture: ComponentFixture<House3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ House3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(House3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
