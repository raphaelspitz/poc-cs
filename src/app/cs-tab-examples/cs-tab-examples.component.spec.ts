import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsTabExamplesComponent } from './cs-tab-examples.component';

describe('CsTabExamplesComponent', () => {
  let component: CsTabExamplesComponent;
  let fixture: ComponentFixture<CsTabExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsTabExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsTabExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
