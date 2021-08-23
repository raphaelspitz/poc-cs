import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tk-pagination',
  templateUrl: './tk-pagination.component.html',
  styleUrls: ['./tk-pagination.component.scss'],
})
export class TkPaginationComponent implements OnInit {
  // totalitems just in case if we need to make this component more complex suppose we need to get the total amount of items per pages
  // we couud then add more logic  to calculate how many pages we will have to show to the user and how many items to render per pages
  @Input() public totalItems = 1;
  @Input() public currentPage = 1;
  @Input() public step = 1;
  // notifiying to the parent that the data has been updated
  @Output() public pageChange: EventEmitter<number> = new EventEmitter();

  public get totalPages(): number {
    return Math.ceil(this.totalItems || 1);
  }

  public get isFirstPage(): boolean {
    return this.currentPage === 1;
  }

  public isLastPage(): boolean {
    return this.currentPage === this.totalPages;
  }

  public get isPreviousDisabled(): boolean {
    return this.currentPage - this.step < 1;
  }

  public get isNextDisabled(): boolean {
    return this.currentPage + this.step > this.totalPages;
  }

  // passing for the moment the total amount of items but if needed the logic can be change to associate the number of items we want to show per pages
  public get pages(): number[] {
    const pages = [];

    for (let i = 1; i <= this.totalItems; i++) {
      pages.push(i);
    }

    return pages;
  }

  public setPage(page: number): void {
    this.currentPage = page;
    this.pageChange.emit(page);
  }

  constructor() {}

  ngOnInit() {}
}
