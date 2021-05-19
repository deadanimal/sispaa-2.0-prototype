import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogHarianComponent } from './log-harian.component';

describe('LogHarianComponent', () => {
  let component: LogHarianComponent;
  let fixture: ComponentFixture<LogHarianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogHarianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogHarianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
