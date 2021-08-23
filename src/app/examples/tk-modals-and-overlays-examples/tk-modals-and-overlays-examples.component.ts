import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tk-modals-and-overlays-examples',
  templateUrl: './tk-modals-and-overlays-examples.component.html',
  styles: ['./tk-modals-and-overlays-examples.component.scss'],
})
export class TkModalsAndOverlaysExamplesComponent implements OnInit {
  public displayModal = false;
  public displayModal2 = false;
  public displayModal3 = false;
  tabLineActive: number = 0;
  tabBtnActive: number = 0;
  constructor() {}

  //vertical nav bar code example
  public tabs: { title: string; active: boolean }[] = [
    { title: 'Tab 1', active: true },
    { title: 'Tab 2', active: false },
  ];
  //vertical nav bar code example
  public selectedTab = 0;

  setTabBtnActive(index: number) {
    this.tabBtnActive = index;
  }
  setTabLineActive(index: number) {
    this.tabLineActive = index;
  }

  ngOnInit() {}
}
