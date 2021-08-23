import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tk-badge-examples',
  templateUrl: './tk-badge-examples.component.html',
  styleUrls: ['./tk-badge-examples.component.scss'],
})
export class TkBadgeExamplesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  codePartOne: boolean = false;
  badges = `
    <div class="tk-badge col-6">
      <span class="tk-badge-round-border">1</span>
      <span class="tk-badge-text">Badge</span>
    </div>
    <div class="tk-badge col-6">
      <span class="tk-badge-round-border">2</span>
      <span class="tk-badge-text">Badge</span>
    </div>
    <div class="tk-badge col-6">
      <span class="tk-badge-round-border">3</span>
      <span class="tk-badge-text">Badge</span>
    </div>
    <div class="tk-badge col-6">
      <span class="tk-badge-round-border">4</span>
      <span class="tk-badge-text">Badge</span>
    </div>
  `;
}
