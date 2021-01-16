import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CsInputExamplesComponent } from "./cs-input-examples/cs-input-examples.component";
import { AppRoutingModule } from "./app-routing.module";
import { CsTableExamplesComponent } from './cs-table-examples/cs-table-examples.component';
import { CsButtonExamplesComponent } from './cs-button-examples/cs-button-examples.component';
import { CsTabExamplesComponent } from './cs-tab-examples/cs-tab-examples.component';
import { ModalComponent } from './modal/modal.component';
import { CsModalsAndOverlaysExamplesComponent } from './cs-modals-and-overlays-examples/cs-modals-and-overlays-examples.component';

@NgModule({
  declarations: [AppComponent, CsInputExamplesComponent, CsTableExamplesComponent, CsButtonExamplesComponent, CsTabExamplesComponent, ModalComponent, CsModalsAndOverlaysExamplesComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
