import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tk-link-examples',
  templateUrl: './tk-link-examples.component.html',
  styleUrls: ['./tk-link-examples.component.scss'],
})
export class TkLinkExamplesComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  codePartOne: boolean = false;
  links = `
    <a class="tk-link tk-link-primary" href="/link-examples">Primary Link 
      <span class="tk-link-icon"><i class="fa fa-search"></i></span>
    </a>
    <a class="tk-link tk-link-primary" href="/link-examples" disabled>Primary Link Disabled 
      <span class="tk-link-icon"><i class="fa fa-search"></i></span>
    </a>

    <a class="tk-link tk-link-text" href="/link-examples">Text Link</a>
    <a class="tk-link tk-link-text" href="/link-examples" disabled>Text Link Disabled</a>

    <a class="tk-link tk-link-primary tk-link-sm" href="/link-examples">Primary Link small
      <span class="tk-link-icon"><i class="fa fa-search"></i></span>
    </a>
    <a class="tk-link tk-link-text tk-link-sm" href="/link-examples">Text Link small</a>
  `;
}
