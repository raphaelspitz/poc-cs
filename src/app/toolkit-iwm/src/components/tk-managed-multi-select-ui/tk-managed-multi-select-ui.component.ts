import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { ISelectedCategories } from "src/app/interface/document-custom.interfaces";

@Component({
  selector: "tk-managed-multi-select-ui",
  templateUrl: "./tk-managed-multi-select-ui.component.html",
  styleUrls: ["./tk-managed-multi-select-ui.component.scss"],
})
export class TkManagedMultiSelectUi {
  constructor(private translateService: TranslateService) {}
  all: string = this.translateService.instant("EDOCSCLIENTVIEW.FILTERS.ALL");
  selected: string = this.translateService.instant(
    "EDOCSCLIENTVIEW.FILTERS.SELECTED"
  );
  private _categories!: ISelectedCategories[];
  get categories(): ISelectedCategories[] {
    return this._categories;
  }
  @Input()
  set categories(value: ISelectedCategories[]) {
    this._categories = value;
    this.updateSelectedCount();
  }

  @Output() emitSelectedCategories = new EventEmitter<ISelectedCategories[]>();
  selectedCount: number = 0;
  updateSelectedCount() {
    this.selectedCount = this.categories.filter(
      (category: ISelectedCategories) => category.checked
    ).length;
  }
  selectDeselectCategoryList(selectedCategory: ISelectedCategories) {
    selectedCategory.checked = !selectedCategory.checked;
    this.updateSelectedCount();
    this.emitSelectedCategories.emit(this.categories);
  }
  selectAllCategories() {
    this.categories = this.categories.map((category) => {
      category.checked = true;
      return category;
    });
    this.updateSelectedCount();
    this.emitSelectedCategories.emit(this.categories);
  }
  clearAllCategories() {
    this.categories = this.categories.map((category) => {
      category.checked = false;
      return category;
    });
    this.updateSelectedCount();
    this.emitSelectedCategories.emit(this.categories);
  }
}
