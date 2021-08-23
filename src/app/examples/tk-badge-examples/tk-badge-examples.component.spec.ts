import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TkBadgeExamplesComponent } from './tk-badge-examples.component';

describe('TkBadgeExamplesComponent', () => {
  let component: TkBadgeExamplesComponent;
  let fixture: ComponentFixture<TkBadgeExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TkBadgeExamplesComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TkBadgeExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
