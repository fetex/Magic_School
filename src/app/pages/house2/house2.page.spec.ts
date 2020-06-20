import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { House2Page } from './house2.page';

describe('House2Page', () => {
  let component: House2Page;
  let fixture: ComponentFixture<House2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ House2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(House2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
