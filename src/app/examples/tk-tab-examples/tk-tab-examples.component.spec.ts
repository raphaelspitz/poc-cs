import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TkTabExamplesComponent } from './tk-tab-examples.component';

describe('TkTabExamplesComponent', () => {
  let component: TkTabExamplesComponent;
  let fixture: ComponentFixture<TkTabExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TkTabExamplesComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TkTabExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
