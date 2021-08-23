import { Component, Input } from '@angular/core';

@Component({
  selector: 'tk-switch-toggle',
  templateUrl: './tk-switch-toggle.component.html',
  styleUrls: ['./tk-switch-toggle.component.scss'],
})
export class TkSwitchToggle {
  @Input() public isOn = false;

  public toggle() {
    this.isOn = !this.isOn;
  }
}
