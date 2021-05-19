import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AduanComponent } from './aduan.component';

describe('AduanComponent', () => {
  let component: AduanComponent;
  let fixture: ComponentFixture<AduanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AduanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AduanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
