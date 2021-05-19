import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisasiComponent } from './organisasi.component';

describe('OrganisasiComponent', () => {
  let component: OrganisasiComponent;
  let fixture: ComponentFixture<OrganisasiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganisasiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganisasiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
