import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TkInputExamplesComponent } from './tk-input-examples.component';

describe('TkInputExamplesComponent', () => {
  let component: TkInputExamplesComponent;
  let fixture: ComponentFixture<TkInputExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TkInputExamplesComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TkInputExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
