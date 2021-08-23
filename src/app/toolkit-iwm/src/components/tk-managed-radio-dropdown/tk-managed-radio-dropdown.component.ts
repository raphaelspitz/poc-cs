import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { IStatusData } from "src/app/interface/document-custom.interfaces";

@Component({
  selector: "tk-managed-radio-dropdown",
  templateUrl: "./tk-managed-radio-dropdown.component.html",
  styleUrls: ["./tk-managed-radio-dropdown.component.scss"],
})
export class TkManagedRadioDropdown {
  _filterStatusOptions: IStatusData[] = [];
  get filterStatusOptions(): IStatusData[] {
    return this._filterStatusOptions;
  }
  @Input() set filterStatusOptions(value: IStatusData[]) {
    this._filterStatusOptions = value;
    const defaultSelectedStatus: IStatusData = <IStatusData>(
      value.find((status: IStatusData) => status.isSelected)
    );
    this.selectedValue = defaultSelectedStatus.value;
  }
  @Output() updateFilterStatus = new EventEmitter<IStatusData[]>();
  selectedValue!: string;
  selectStatusValue(selectStatusdata: any) {
    const updated: IStatusData[] = this.filterStatusOptions.map(
      (status: IStatusData) => {
        if (
          selectStatusdata &&
          status.value === selectStatusdata.target.value
        ) {
          status.isSelected = true;
        } else {
          status.isSelected = false;
        }
        return status;
      }
    );
    this.updateFilterStatus.emit(updated);
  }
}
