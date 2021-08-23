import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ThreeDotsDropDownItems } from './three-dots-dropdown-Items';

@Component({
  selector: 'tk-three-dots-drop-down',
  templateUrl: './tk-three-dots-drop-down.component.html',
  styleUrls: ['./tk-three-dots-dop-down.component.scss'],
})
export class TkThreeDotsDropDown implements OnInit {
  @Input() public isDropDownHidden = false;
  @Input() public items: ThreeDotsDropDownItems[] = [];

  @Output() clickItemEvent = new EventEmitter<number>();

  constructor() {}

  ngOnInit() {}

  onClickItem(index: number) {
    this.clickItemEvent.emit(index);
  }
}
