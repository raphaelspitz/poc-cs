import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Pipe, PipeTransform } from "@angular/core";
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { TkThreeDotsDropDown } from "./toolkit-iwm/src/components/tk-three-dots-drop-down/tk-three-dots-drop-down.component";
import { TkModalComponent } from "./toolkit-iwm/src/components/tk-modal/tk-modal.component";
import { TkPaginationComponent } from "./toolkit-iwm/src/components/tk-pagination/tk-pagination.component";
import { TkSlideLeftRight } from "./toolkit-iwm/src/components/tk-slide-left-right/tk-slide-left-right.component";
import { TkVerticalNavbar } from "./toolkit-iwm/src/components/tk-vertical-navbar/tk-vertical-navbar.component";
import { TkSwitchToggle } from "./toolkit-iwm/src/components/tk-switch-toggle/tk-switch-toggle.component";
import { TkAccordion } from "./toolkit-iwm/src/components/tk-accordion/tk-accordion.component";
import { TkManagedMultiSelectUi } from "./toolkit-iwm/src/components/tk-managed-multi-select-ui/tk-managed-multi-select-ui.component";
import { TkManagedRadioDropdown } from "./toolkit-iwm/src/components/tk-managed-radio-dropdown/tk-managed-radio-dropdown.component";
import { TkManagedDateRangeComponent } from "./toolkit-iwm/src/components/tk-managed-date-range-picker/tk-managed-date-range-picker.component";
import { TkLoadMoreComponent } from "./toolkit-iwm/src/components/tk-load-more/tk-load-more.component";
import { TkSpinnerComponent } from "./toolkit-iwm/src/components/tk-spinner/tk-spinner.component";
import { ToolkitDocumentationComponent } from "./components/toolkit-documentation/toolkit-documentation.component";
import { TkInputExamplesComponent } from "./examples/tk-input-examples/tk-input-examples.component";
import { TkBadgeExamplesComponent } from "./examples/tk-badge-examples/tk-badge-examples.component";
import { TkModalsAndOverlaysExamplesComponent } from "./examples/tk-modals-and-overlays-examples/tk-modals-and-overlays-examples.component";
import { TkColorExamplesComponent } from "./examples/tk-color-examples/tk-color-examples.component";
import { TkAnimationExamplesComponent } from "./examples/tk-animation-examples/tk-animation-examples.component";
import { TkDropdownExamplesComponent } from "./examples/tk-dropdown-examples/tk-dropdown-examples.component";
import { TkHoverBordersExamplesComponent } from "./examples/tk-hover-borders-examples/tk-hover-borders-examples.component";
import { TkCardExamplesComponent } from "./examples/tk-card-examples/tk-card-examples.component";
import {
  NgbCalendar,
  NgbDateNativeAdapter,
  NgbModule,
  NgbDatepickerModule,
  NgbDatepickerI18n,
  NgbDatepickerConfig,
  NgbDateAdapter,
} from "@ng-bootstrap/ng-bootstrap";
import { TranslateModule } from "@ngx-translate/core";
import { TkTableExamplesComponent } from "./examples/tk-table-examples/tk-table-examples.component";
import { TkTabExamplesComponent } from "./examples/tk-tab-examples/tk-tab-examples.component";
import { TkLinkExamplesComponent } from "./examples/tk-link-examples/tk-link-examples.component";
import { TkButtonExamplesComponent } from "./examples/tk-button-examples/tk-button-examples.component";
import { TkIconsExamplesComponent } from "./examples/tk-icons-examples/tk-icons-examples.component";
import { TkDatePicker } from "./toolkit-iwm/src/components/tk-date-picker/tk-date-picker.component";

@Pipe({
  name: "tableFilter",
})
export class TableFilterPipe implements PipeTransform {
  transform(list: any[], value: string) {
    // If there's a value passed (male or female) it will filter the list otherwise it will return the original unfiltered list.
    return value ? list.filter((item) => item.gender === value) : list;
  }
}

@NgModule({
  declarations: [
    AppComponent,
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
    ToolkitDocumentationComponent,
    TkInputExamplesComponent,
    TkBadgeExamplesComponent,
    TkInputExamplesComponent,
    TkInputExamplesComponent,
    TkModalsAndOverlaysExamplesComponent,
    TkInputExamplesComponent,
    TkBadgeExamplesComponent,
    TkColorExamplesComponent,
    TkAnimationExamplesComponent,
    TkInputExamplesComponent,
    TkDropdownExamplesComponent,
    TkHoverBordersExamplesComponent,
    TkBadgeExamplesComponent,
    TkCardExamplesComponent,
    TkTableExamplesComponent,
    TkTabExamplesComponent,
    TkLinkExamplesComponent,
    TkButtonExamplesComponent,
    TkIconsExamplesComponent,
    TkDatePicker,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    TranslateModule.forRoot(),
  ],
  providers: [NgbDateNativeAdapter],
  bootstrap: [AppComponent],
})
export class AppModule {}
