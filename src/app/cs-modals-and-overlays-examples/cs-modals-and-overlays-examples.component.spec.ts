import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsModalsAndOverlaysExamplesComponent } from './cs-modals-and-overlays-examples.component';

describe('CsModalsAndOverlaysExamplesComponent', () => {
  let component: CsModalsAndOverlaysExamplesComponent;
  let fixture: ComponentFixture<CsModalsAndOverlaysExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsModalsAndOverlaysExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsModalsAndOverlaysExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
