import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tk-button-examples',
  templateUrl: './tk-button-examples.component.html',
  styleUrls: ['./tk-button-examples.component.scss'],
})
export class TkButtonExamplesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  buttons = `
    <button class="tk-btn tk-btn-primary">Primary</button>
    <button class="tk-btn tk-btn-primary" disabled>Primary disabled</button>

    <button class="tk-btn tk-btn-secondary">Secondary</button>
    <button class="tk-btn tk-btn-secondary" disabled>Secondary disabled</button>

    <button class="tk-btn tk-btn-primary tk-btn-sm">Primary small</button>
    <button class="tk-btn tk-btn-secondary tk-btn-sm">Secondary small</button>
  `;

  buttonsIcons = `
    <button class="tk-btn tk-btn-icon">
      <span class="tk-btn-icon-icon">
        <i class="icon icon-search"></i>
      </span>
      <span class="tk-btn-icon-text">Button Icon Text</span>
    </button>

    <button class="tk-btn tk-btn-icon" disabled>
      <span class="tk-btn-icon-icon">
        <i class="icon icon-search"></i>
      </span>
      <span class="tk-btn-icon-text">Button Icon Text disabled</span>
    </button>

    <button class="tk-btn tk-btn-icon">
      <span class="tk-btn-icon-icon">
        <i class="icon icon-search"></i>
      </span>
    </button>

    <button class="tk-btn tk-btn-icon" disabled>
      <span class="tk-btn-icon-icon">
        <i class="icon icon-search"></i>
      </span>
    </button>

    <button class="tk-btn tk-btn-icon tk-btn-sm">
      <span class="tk-btn-icon-icon">
        <i class="icon icon-search"></i>
      </span>
      <span class="tk-btn-icon-text">Button Icon Text small</span>
    </button>

    <button class="tk-btn tk-btn-icon tk-btn-sm">
      <span class="tk-btn-icon-icon">
        <i class="icon icon-search"></i>
      </span>
    </button>

    <button class="tk-btn tk-btn-icon tk-btn-no-border">
      <span class="tk-btn-icon-icon">
        <i class="icon icon-search"></i>
      </span>
      <span class="tk-btn-icon-text">Button Icon Text No Border</span>
    </button>

    <button class="tk-btn tk-btn-icon tk-btn-no-border">
      <span class="tk-btn-icon-icon">
        <i class="icon icon-search"></i>
      </span>
    </button>
  `;

  radioButtons = `
    <div class="tk-radio-button">
      <input type="radio" id="1" [checked]="true">
      <label for="1">
        Checked
      </label>
    </div>
    <div class="mt-2 tk-radio-button">
      <input type="radio" id="2" [checked]="false">
      <label for="2">
        Not Checked
      </label>
    </div>
  `;

  paginationDots = `
    <div class="tk-pagination-dot"></div>
    <div class="tk-pagination-dot"></div>
    <div class="tk-pagination-dot active"></div>
  `;

  paginationButtons = `
    <div class="tk-pagination-buttons">
      <div>
        <button class="tk-btn tk-btn tk-btn-secondary tk-btn-sm">
          <span class="tk-btn-icon-icon">
            <i class="fa fa-chevron-left"></i>
          </span>
        </button>
      </div>
      <div class="ml-3">
        <button class="tk-btn tk-btn tk-btn-secondary tk-btn-sm">
          <span class="tk-btn-icon-icon">
            <i class="fa fa-chevron-right"></i>
          </span>
        </button>
      </div>
    </div>

    <div class="pb-1">
      <div class="col-3">
        <button class="tk-btn tk-btn-icon tk-btn-sm tk-btn-no-border">
          <span class="tk-btn-icon-icon">
            <i class="icon icon-search"></i>
          </span>
          <span class="tk-btn-icon-text">Button Icon Text small No Border</span>
        </button>
      </div>
    </div>
    <div class="pb-4">
      <div class="col-3">
        <button class="tk-btn tk-btn-icon tk-btn-sm tk-btn-no-border">
          <span class="tk-btn-icon-icon">
            <i class="icon icon-search"></i>
          </span>
        </button>
      </div>
    </div>
  `;

  pagination = `
    <tk-pagination [totalItems]="5"></tk-pagination>
  `;

  checkBox = `
    <div class="tk-checkbox">
      <input type="checkbox" [checked]="true">
      <span class="checkmark"></span>
      <label>One</label>
    </div>
    <div class="tk-checkbox">
      <input type="checkbox" [checked]="false">
      <span class="checkmark"></span>
      <label>Two</label>
    </div>
  `;

  codePartOne: boolean = false;
  codePartTwo: boolean = false;
  codePartThree: boolean = false;
  codePartFour: boolean = false;
  codePartFive: boolean = false;
  codePartSix: boolean = false;
  codePartSeven: boolean = false;
}
