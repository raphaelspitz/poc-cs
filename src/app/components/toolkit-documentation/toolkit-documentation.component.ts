import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bb-toolkit-documentation',
  templateUrl: './toolkit-documentation.component.html',
  styleUrls: ['./toolkit-documentation.component.scss'],
})
export class ToolkitDocumentationComponent implements OnInit {
  codePartOne: boolean = false;

  constructor() {}

  ngOnInit() {}

  butons = `
        <button class="btn btn-primary">Primary</button>
        <button class="btn btn-primary" disabled>Primary disabled</button>

        <button class="btn btn-secondary">Secondary</button>
        <button class="btn btn-secondary" disabled>Secondary disabled</button>

        <button class="btn btn-primary btn-sm">Primary small</button>
        <button class="btn btn-primary btn-sm" disabled>
          Primary small disabled
        </button>

        <button class="btn btn-secondary btn-sm">Secondary small</button>
        <button class="btn btn-secondary btn-sm" disabled>
          Secondary small disabled
        </button>
  `;
}
