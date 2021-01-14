import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsTableExamplesComponent } from './cs-table-examples.component';

describe('CsTableExamplesComponent', () => {
  let component: CsTableExamplesComponent;
  let fixture: ComponentFixture<CsTableExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsTableExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsTableExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
