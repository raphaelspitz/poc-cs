import { Component, ViewChild, ElementRef, Input } from "@angular/core";
import * as $ from "jquery";

@Component({
  selector: "tk-slide-left-right",
  templateUrl: "./tk-slide-left-right.component.html",
  styleUrls: ["./tk-slide-left-right.component.scss"],
})
export class TkSlideLeftRight {
  IS_APP = true;
  @Input() totalItems = [];

  constructor() {}

  @ViewChild("slider", { static: false })
  slider!: ElementRef<HTMLElement>;
  isDown = false;
  startX = 0;
  scrollLeft = 0;

  onMouseDown(e: any) {
    this.isDown = true;
    this.startX = e.pageX - this.slider.nativeElement.offsetLeft;
    this.scrollLeft = this.slider.nativeElement.scrollLeft;
  }

  onMouseLeave(e: any) {
    this.isDown = false;
  }

  onMouseUp(e: any) {
    this.isDown = false;
  }

  onMouseMove(e: any) {
    if (!this.isDown) return;
    e.preventDefault();
    const x = e.pageX - this.slider.nativeElement.offsetLeft;
    const walk = (x - this.startX) * 2; //scroll-fast
    this.slider.nativeElement.scrollLeft = this.scrollLeft - walk;
  }

  scrollTo(scrollToLeft: boolean) {
    // TODO: Find a better solution to animate the scroll left action
    // than using JQuery
    if (scrollToLeft) {
      $("#slider").animate(
        {
          scrollLeft:
            this.slider.nativeElement.scrollLeft -
            this.slider.nativeElement.offsetWidth,
        },
        "slow"
      );
    } else {
      $("#slider").animate(
        {
          scrollLeft:
            this.slider.nativeElement.scrollLeft +
            this.slider.nativeElement.offsetWidth,
        },
        "slow"
      );
    }
  }
}
