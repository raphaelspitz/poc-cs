import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsButtonExamplesComponent } from './cs-button-examples.component';

describe('CsButtonExamplesComponent', () => {
  let component: CsButtonExamplesComponent;
  let fixture: ComponentFixture<CsButtonExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsButtonExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsButtonExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
