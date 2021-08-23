import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ToolkitDocumentationComponent } from "./components/toolkit-documentation/toolkit-documentation.component";
import { TkAnimationExamplesComponent } from "./examples/tk-animation-examples/tk-animation-examples.component";
import { TkBadgeExamplesComponent } from "./examples/tk-badge-examples/tk-badge-examples.component";
import { TkButtonExamplesComponent } from "./examples/tk-button-examples/tk-button-examples.component";
import { TkCardExamplesComponent } from "./examples/tk-card-examples/tk-card-examples.component";
import { TkColorExamplesComponent } from "./examples/tk-color-examples/tk-color-examples.component";
import { TkDropdownExamplesComponent } from "./examples/tk-dropdown-examples/tk-dropdown-examples.component";
import { TkHoverBordersExamplesComponent } from "./examples/tk-hover-borders-examples/tk-hover-borders-examples.component";
import { TkIconsExamplesComponent } from "./examples/tk-icons-examples/tk-icons-examples.component";
import { TkInputExamplesComponent } from "./examples/tk-input-examples/tk-input-examples.component";
import { TkLinkExamplesComponent } from "./examples/tk-link-examples/tk-link-examples.component";
import { TkModalsAndOverlaysExamplesComponent } from "./examples/tk-modals-and-overlays-examples/tk-modals-and-overlays-examples.component";
import { TkTabExamplesComponent } from "./examples/tk-tab-examples/tk-tab-examples.component";
import { TkTableExamplesComponent } from "./examples/tk-table-examples/tk-table-examples.component";

const routes: Routes = [
  { path: "", component: ToolkitDocumentationComponent },
  { path: "input-examples", component: TkInputExamplesComponent },
  { path: "table-examples", component: TkTableExamplesComponent },
  { path: "button-examples", component: TkButtonExamplesComponent },
  { path: "tab-examples", component: TkTabExamplesComponent },
  {
    path: "overlays-examples",
    component: TkModalsAndOverlaysExamplesComponent,
  },
  { path: "link-examples", component: TkLinkExamplesComponent },
  { path: "badge-examples", component: TkBadgeExamplesComponent },
  { path: "pagination-examples", component: TkButtonExamplesComponent },
  { path: "color-examples", component: TkColorExamplesComponent },
  { path: "animations", component: TkAnimationExamplesComponent },
  { path: "icons", component: TkIconsExamplesComponent },
  { path: "dropdown", component: TkDropdownExamplesComponent },
  { path: "hover-borders", component: TkHoverBordersExamplesComponent },
  { path: "card", component: TkCardExamplesComponent },
  { path: "**", component: TkInputExamplesComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
