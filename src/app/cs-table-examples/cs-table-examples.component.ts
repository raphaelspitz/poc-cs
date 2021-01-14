import {
  animate,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { Component, OnInit } from "@angular/core";
import { positionListDatas, ptfandAccountsDatas } from "./datas";

@Component({
  selector: "app-cs-table-examples",
  templateUrl: "./cs-table-examples.component.html",
  styleUrls: ["./cs-table-examples.component.scss"],
  animations: [
    trigger("animationExpand", [
      state("false", style({ height: "0px", opacity: 0 })),
      state("true", style({ height: "*", opacity: 1 })),
      transition("false <=> true", animate("250ms ease-in")),
    ]),
    trigger("animationExpandPositions", [
      state("false", style({ height: "0px", opacity: 0 })),
      state("true", style({ height: "*", opacity: 1 })),
      transition("false <=> true", animate("250ms ease-in")),
    ]),
  ],
})
export class CsTableExamplesComponent implements OnInit {
  title = "poc-cs";
  isExpanded = false;

  ptfandAccountsDatas = ptfandAccountsDatas;
  positionListDatas = positionListDatas;

  ngOnInit(): void {
    for (let index = 0; index < this.ptfandAccountsDatas.length; index++) {
      this.ptfandAccountsDatas[index]["isExpanded"] = false;
    }
    for (
      let index = 0;
      index < this.positionListDatas.assetClasses.length;
      index++
    ) {
      this.positionListDatas.assetClasses[index]["isExpanded"] = false;
    }
  }

  collapse(i: number) {
    this.ptfandAccountsDatas[i]["isExpanded"] = !this.ptfandAccountsDatas[i][
      "isExpanded"
    ];
  }

  collapsePositionList(i: number) {
    this.positionListDatas.assetClasses[i]["isExpanded"] = !this
      .positionListDatas.assetClasses[i]["isExpanded"];
  }
}
