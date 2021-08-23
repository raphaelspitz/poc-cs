import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tk-tab-examples',
  templateUrl: './tk-tab-examples.component.html',
  styleUrls: ['./tk-tab-examples.component.scss'],
})
export class TkTabExamplesComponent implements OnInit {
  tabBtnActive: number = 0;
  tabBtnActiveSm: number = 0;
  tabLineActive: number = 0;
  tabLineActiveSm: number = 0;

  constructor() {}

  ngOnInit() {}

  codePartOne: boolean = false;
  codePartTwo: boolean = false;
  tabsButton = `
    <div class="tk-btn-tabs">
      <button class="tk-btn" [ngClass]="(tabBtnActive == '0')? 'tk-tab-active':'tk-tab-not-active'" (click)="settabBtnActive(0);">Performance</button>
      <button class="tk-btn" [ngClass]="(tabBtnActive == '1')? 'tk-tab-active':'tk-tab-not-active'" (click)="settabBtnActive(1);">Asset allocation</button>
      <button class="tk-btn" [ngClass]="(tabBtnActive == '2')? 'tk-tab-active':'tk-tab-not-active'" (click)="settabBtnActive(2);">Currency allocation</button>
    </div>

    <div class="tk-btn-tabs">
      <button class="tk-btn tk-btn-sm" [ngClass]="(tabBtnActiveSm == '0')? 'tk-tab-active':'tk-tab-not-active'" (click)="settabBtnActiveSm(0);">Performance</button>
      <button class="tk-btn tk-btn-sm" [ngClass]="(tabBtnActiveSm == '1')? 'tk-tab-active':'tk-tab-not-active'" (click)="settabBtnActiveSm(1);">Asset allocation</button>
      <button class="tk-btn tk-btn-sm" [ngClass]="(tabBtnActiveSm == '2')? 'tk-tab-active':'tk-tab-not-active'" (click)="settabBtnActiveSm(2);">Currency allocation</button>
    </div>
  `;

  tabsLine = `
    <div class="tk-line-tabs">
      <button class="tk-line-tab" [ngClass]="(tabLineActive == '0')? 'tk-line-tab-active':'tk-line-tab-not-active'" (click)="setTabLineActive(0);">Performance</button>
      <button class="tk-line-tab" [ngClass]="(tabLineActive == '1')? 'tk-line-tab-active':'tk-line-tab-not-active'" (click)="setTabLineActive(1);">Asset allocation</button>
      <button class="tk-line-tab" [ngClass]="(tabLineActive == '2')? 'tk-line-tab-active':'tk-line-tab-not-active'" (click)="setTabLineActive(2);">Currency allocation</button>
    </div>

    <div class="tk-line-tabs pt-4">
      <button class="tk-line-tab tk-line-sm" [ngClass]="(tabLineActiveSm == '0')? 'tk-line-tab-active':'tk-line-tab-not-active'" (click)="setTabLineActiveSm(0);">Performance</button>
      <button class="tk-line-tab tk-line-sm" [ngClass]="(tabLineActiveSm == '1')? 'tk-line-tab-active':'tk-line-tab-not-active'" (click)="setTabLineActiveSm(1);">Asset allocation</button>
      <button class="tk-line-tab tk-line-sm" [ngClass]="(tabLineActiveSm == '2')? 'tk-line-tab-active':'tk-line-tab-not-active'" (click)="setTabLineActiveSm(2);">Currency allocation</button>
    </div>
  `;

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

  setTabBtnActiveSm(index: number) {
    this.tabBtnActiveSm = index;
  }

  setTabLineActive(index: number) {
    this.tabLineActive = index;
  }

  setTabLineActiveSm(index: number) {
    this.tabLineActiveSm = index;
  }
}
