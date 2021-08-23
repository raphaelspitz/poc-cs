import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TkTableExamplesComponent } from './tk-table-examples.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('TkTableExamplesComponent', () => {
  let component: TkTableExamplesComponent;
  let fixture: ComponentFixture<TkTableExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TkTableExamplesComponent],
      imports: [BrowserAnimationsModule, NoopAnimationsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TkTableExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
