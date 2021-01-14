import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CsInputExamplesComponent } from "./cs-input-examples/cs-input-examples.component";
import { AppRoutingModule } from "./app-routing.module";
import { CsTableExamplesComponent } from './cs-table-examples/cs-table-examples.component';
import { CsButtonExamplesComponent } from './cs-button-examples/cs-button-examples.component';

@NgModule({
  declarations: [AppComponent, CsInputExamplesComponent, CsTableExamplesComponent, CsButtonExamplesComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
