import { TranslateModule } from "@ngx-translate/core";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TkThreeDotsDropDown } from "./components/tk-three-dots-drop-down/tk-three-dots-drop-down.component";
import { TkModalComponent } from "./components/tk-modal/tk-modal.component";
import { TkPaginationComponent } from "./components/tk-pagination/tk-pagination.component";
import { TkSlideLeftRight } from "./components/tk-slide-left-right/tk-slide-left-right.component";
import { TkVerticalNavbar } from "./components/tk-vertical-navbar/tk-vertical-navbar.component";
import { TkSwitchToggle } from "./components/tk-switch-toggle/tk-switch-toggle.component";
import { TkAccordion } from "./components/tk-accordion/tk-accordion.component";
import { TkManagedMultiSelectUi } from "./components/tk-managed-multi-select-ui/tk-managed-multi-select-ui.component";
import {
  NgbModule,
  NgbDatepicker,
  NgbCalendar,
} from "@ng-bootstrap/ng-bootstrap";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TkManagedRadioDropdown } from "./components/tk-managed-radio-dropdown/tk-managed-radio-dropdown.component";
import { TkManagedDateRangeComponent } from "./components/tk-managed-date-range-picker/tk-managed-date-range-picker.component";
import { TkLoadMoreComponent } from "./components/tk-load-more/tk-load-more.component";
import { TkSpinnerComponent } from "./components/tk-spinner/tk-spinner.component";
import { TkDatePicker } from "./components/tk-date-picker/tk-date-picker.component";

@NgModule({
  declarations: [
    TkThreeDotsDropDown,
    TkModalComponent,
    TkPaginationComponent,
    TkSlideLeftRight,
    TkVerticalNavbar,
    TkSwitchToggle,
    TkAccordion,
    TkManagedMultiSelectUi,
    TkManagedRadioDropdown,
    TkManagedDateRangeComponent,
    TkLoadMoreComponent,
    TkSpinnerComponent,
    TkDatePicker,
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forRoot(),
  ],
  exports: [
    TkThreeDotsDropDown,
    TkModalComponent,
    TkPaginationComponent,
    TkSlideLeftRight,
    TkVerticalNavbar,
    TkSwitchToggle,
    TkAccordion,
    TkManagedMultiSelectUi,
    TkManagedRadioDropdown,
    TkManagedDateRangeComponent,
    TkLoadMoreComponent,
    TkSpinnerComponent,
    TkDatePicker,
  ],
})
export class ToolkitIwmModule {}
