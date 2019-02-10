import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCntComponent } from './main-cnt.component';

describe('MainCntComponent', () => {
  let component: MainCntComponent;
  let fixture: ComponentFixture<MainCntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
