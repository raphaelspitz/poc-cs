import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { AccordionItem } from "./accordion-item.interface";
export interface ISelectedCategories {
  categoryCode: string;
  categoryName: string;
  checked: boolean;
}
@Component({
  selector: "tk-accordion",
  templateUrl: "./tk-accordion.component.html",
  styleUrls: ["./tk-accordion.component.scss"],
})
export class TkAccordion implements OnInit {
  @Input() public items: AccordionItem[] = [];
  @Output() selectedTabIndex = new EventEmitter<number>();
  @Input() categories: ISelectedCategories[] = [];

  isExpanded = false;

  public selectedTab: string = "";

  public toggle(content: AccordionItem[], index: number): void {
    this.selectedTab = content.toString();
    this.selectedTabIndex.emit(index);
  }

  ngOnInit(): void {
    this.selectedTab = this.items[0].toString();
  }
}
