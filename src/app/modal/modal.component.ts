import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"],
})
export class ModalComponent implements OnInit {
  @Input() public title = "";

  constructor() {}

  ngOnInit() {}
  public isHidden = true;

  public close(): void {
    this.isHidden = true;
  }

  public open(): void {
    this.isHidden = false;
  }
}
