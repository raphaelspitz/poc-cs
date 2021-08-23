import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TkModalComponent } from './tk-modal.component';

describe('TkModalComponent', () => {
  let component: TkModalComponent;
  let fixture: ComponentFixture<TkModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TkModalComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TkModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
