import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { positionListDatas, ptfandAccountsDatas, cifListData, filteredData, loadMoreData } from './datas';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'tk-table-examples',
  templateUrl: './tk-table-examples.component.html',
  styleUrls: ['./tk-table-examples.component.scss'],
  animations: [
    trigger('animationExpand', [
      state('false', style({ height: '0px', opacity: 0 })),
      state('true', style({ height: '*', opacity: 1 })),
      transition('false <=> true', animate('250ms ease-in')),
    ]),
    trigger('animationExpandPositions', [
      state('false', style({ height: '0px', opacity: 0 })),
      state('true', style({ height: '*', opacity: 1 })),
      transition('false <=> true', animate('250ms ease-in')),
    ]),
  ],
})
export class TkTableExamplesComponent implements OnInit {
  title = 'poc-cs';
  isExpanded = false;
  currentSortKey: string | undefined;
  currentSortOrder: boolean = true; // 1 for asc , 0 for desc
  cifListData: any = cifListData;

  ptfandAccountsDatas: any = ptfandAccountsDatas;
  positionListDatas: any = positionListDatas;

  isReloadedTableInformation: boolean | undefined = true;

  filteredData:any = filteredData;
  pageId: number = 1;

    
    constructor(private ref: ChangeDetectorRef) {}

  ngOnInit(): void {
    for (let index = 0; index < this.ptfandAccountsDatas.length; index++) {
      this.ptfandAccountsDatas[index]['isExpanded'] = false;
    }
    for (let index = 0; index < this.positionListDatas.assetClasses.length; index++) {
      this.positionListDatas.assetClasses[index]['isExpanded'] = false;
    }
  }

  collapse(i: number) {
    this.ptfandAccountsDatas[i]['isExpanded'] = !this.ptfandAccountsDatas[i]['isExpanded'];
  }

  collapsePositionList(i: number) {
    this.positionListDatas.assetClasses[i]['isExpanded'] = !this.positionListDatas.assetClasses[i]['isExpanded'];
  }

  defineSortOrder(sortBy: string) {
    if (sortBy == this.currentSortKey) {
      this.currentSortOrder = !this.currentSortOrder //Toggle ascending/descending
    }
    else {
      this.currentSortKey = sortBy;
      this.currentSortOrder = true; //Ascending
    }

  }

  sortTableString(sortBy: string) {

    this.defineSortOrder(sortBy);
    const newList = this.cifListData.map((arr: any) => arr[sortBy])
    if (!newList.every((val: any, i: any, arr: any[]) => val === arr[0])) {
      if (this.currentSortOrder) {
        //sort asc
        this.cifListData.sort((a: any, b: any) => { return a[sortBy] >= b[sortBy] ? 1 : -1 });

      }
      else {
        //sort desc
        this.currentSortKey = sortBy;
        this.cifListData.sort((a: any, b: any) => { return a[sortBy] >= b[sortBy] ? -1 : 1 });
      }
    }
  }

  sortTableNum(sortBy: string) {
    this.defineSortOrder(sortBy);
    const newList = this.cifListData.map((arr: any) => arr[sortBy])
    if (!newList.every((val: any, i: any, arr: any[]) => val === arr[0])) {

      if (this.currentSortOrder) {
        //sort asc
        this.cifListData.sort((a: any, b: any) => { return parseInt(a[sortBy]) >= parseInt(b[sortBy]) ? 1 : -1 });

      }
      else {
        //sort desc
        this.currentSortKey = sortBy;
        this.cifListData.sort((a: any, b: any) => { return parseInt(a[sortBy]) >= parseInt(b[sortBy]) ? -1 : 1 });
      }
    }
  }

  loadAccountActivityData() {
    this.isReloadedTableInformation = false;
//just to simmulate a fake get request
    setTimeout(() => { 
      this.isReloadedTableInformation = true;
      this.filteredData = [...this.filteredData, ...loadMoreData];
      this.ref.markForCheck();
    }, 1000);
  }

  loadMoreAccountActivity() { 
      this.loadAccountActivityData();
  }
}
