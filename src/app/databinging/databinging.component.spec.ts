import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabingingComponent } from './databinging.component';

describe('DatabingingComponent', () => {
  let component: DatabingingComponent;
  let fixture: ComponentFixture<DatabingingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabingingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabingingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
