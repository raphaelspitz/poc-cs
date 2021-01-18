import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"],
})
export class ModalComponent implements OnInit {
  @Input() public title = "";
  @Input() public subTitle = "";
  @Input() public topPosition = "";
  @Input() public isHidden = true;

  @Output() closeModalEvent = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  public close(): void {
    this.isHidden = true;
    this.closeModalEvent.emit();
  }
  public closeOverlay(flag): void {
    if (flag === true) this.isHidden = true;
  }

  public open(): void {
    this.isHidden = false;
  }
}
