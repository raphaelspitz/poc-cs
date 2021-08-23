import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TkLinkExamplesComponent } from './tk-link-examples.component';

describe('TkLinkExamplesComponent', () => {
  let component: TkLinkExamplesComponent;
  let fixture: ComponentFixture<TkLinkExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TkLinkExamplesComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TkLinkExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
