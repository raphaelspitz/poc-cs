import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'tk-vertical-navbar',
  templateUrl: './tk-vertical-navbar.component.html',
  styleUrls: ['./tk-vertical-navbar.component.scss'],
})
export class TkVerticalNavbar {
  @Input() public tabs: { title: string; active: boolean }[] = [];
  @Output() public selectedTabIndex = new EventEmitter<number>();

  public selectTab(selected: { title: string; active: boolean }, index: number): void {
    this.tabs.forEach(tab => {
      tab.active = selected === tab;
    });
    this.selectedTabIndex.emit(index);
  }
}
