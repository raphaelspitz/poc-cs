import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TkButtonExamplesComponent } from './tk-button-examples.component';

describe('TkButtonExamplesComponent', () => {
  let component: TkButtonExamplesComponent;
  let fixture: ComponentFixture<TkButtonExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TkButtonExamplesComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TkButtonExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
