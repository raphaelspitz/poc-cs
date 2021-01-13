import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsInputExamplesComponent } from './cs-input-examples.component';

describe('CsInputExamplesComponent', () => {
  let component: CsInputExamplesComponent;
  let fixture: ComponentFixture<CsInputExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsInputExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsInputExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
