import { Component, OnInit, Input, Output, EventEmitter, ElementRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'tk-modal',
  templateUrl: './tk-modal.component.html',
  styleUrls: ['./tk-modal.component.scss'],
})
export class TkModalComponent implements OnInit, OnDestroy {
  @Input()
  set display(value: boolean) {
    value ? this.open() : this.close();
  }
  // Note: you can only manage col-md grid or higher dimension since, with lower dimensions (sm), the modal takes full screen width.
  @Input() grid: string = 'col-lg-8 col-md-10'; // default value

  @Output() closeModal = new EventEmitter<boolean>();

  element: any;

  constructor(private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit() {
    // This code will add modal at the end of body elements
    // Needed to pass over other elements, like header
    document.body.appendChild(this.element);
  }

  ngOnDestroy() {
    // We remove the modal from body's children
    document.body.removeChild(this.element);
  }

  open() {
    this.element.style.display = 'block';
    document.body.classList.add('tk-modal-open');
  }

  close() {
    this.element.style.display = 'none';
    document.body.classList.remove('tk-modal-open');
    this.closeModal.emit();
  }
}
