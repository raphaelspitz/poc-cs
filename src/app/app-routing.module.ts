import { ModalComponent } from "./modal/modal.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CsButtonExamplesComponent } from "./cs-button-examples/cs-button-examples.component";
import { CsInputExamplesComponent } from "./cs-input-examples/cs-input-examples.component";
import { CsTabExamplesComponent } from "./cs-tab-examples/cs-tab-examples.component";
import { CsTableExamplesComponent } from "./cs-table-examples/cs-table-examples.component";

const routes: Routes = [
  { path: "input-examples", component: CsInputExamplesComponent },
  { path: "table-examples", component: CsTableExamplesComponent },
  { path: "button-examples", component: CsButtonExamplesComponent },
  { path: "tab-examples", component: CsTabExamplesComponent },
  { path: "modal-examples", component: ModalComponent },
  { path: "**", component: CsInputExamplesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
