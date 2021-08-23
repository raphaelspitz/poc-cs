import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'tk-load-more',
  templateUrl: './tk-load-more.component.html',
  styleUrls: ['./tk-load-more.component.scss']
})
export class TkLoadMoreComponent implements OnInit {

  ngOnInit(): void {}

  @Output() loadMore = new EventEmitter();
  @Input() showMoreData = false;

  loadMoreData() { 
    if(this.showMoreData)
      this.loadMore.emit();
  }
}
