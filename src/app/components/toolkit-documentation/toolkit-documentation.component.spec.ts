import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolkitDocumentationComponent } from './toolkit-documentation.component';

describe('ToolkitDocumentationComponent', () => {
  let component: ToolkitDocumentationComponent;
  let fixture: ComponentFixture<ToolkitDocumentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ToolkitDocumentationComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolkitDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
