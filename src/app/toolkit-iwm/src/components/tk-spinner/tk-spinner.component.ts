import { Component, Input } from '@angular/core';

@Component({
  selector: 'tk-spinner',
  templateUrl: './tk-spinner.component.html',
  styleUrls: ['./tk-spinner.component.scss']
})
export class TkSpinnerComponent {
  @Input() public size = '';
}
