import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TkColorExamplesComponent } from './tk-color-examples.component';

describe('TkColorExamplesComponent', () => {
  let component: TkColorExamplesComponent;
  let fixture: ComponentFixture<TkColorExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TkColorExamplesComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TkColorExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
