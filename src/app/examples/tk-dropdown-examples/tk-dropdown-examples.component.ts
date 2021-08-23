import { Component, OnInit } from "@angular/core";
import { IStatusData } from "src/app/interface/document-custom.interfaces";
import { AccordionItem } from "src/app/toolkit-iwm/src/components/tk-accordion/accordion-item.interface";
import { ISelectedCategories } from "src/app/toolkit-iwm/src/components/tk-accordion/tk-accordion.component";

@Component({
  selector: "tk-dropdown-examples",
  templateUrl: "./tk-dropdown-examples.component.html",
  styleUrls: ["./tk-dropdown-examples.component.scss"],
})
export class TkDropdownExamplesComponent implements OnInit {
  public indexClicked: number = 0;
  public accordionItems: AccordionItem = {
    content: [
      "first child content",
      "second child content",
      "third child content",
      "fourth child content",
      "fifth child content",
    ],
  };
  public showDropdownWithEmptyContent: boolean = false;
  public showInputDropdownWithEmptyContent: boolean = false;
  public showInputDropdownWithSimpleContent: boolean = false;
  public showDropdown: boolean = false;

  filteredCategories = [
    { categoryCode: "FX", categoryName: "Foreign Exchanges", checked: true },
    { categoryCode: "LD", categoryName: "Loans and Deposits", checked: true },
    { categoryCode: "MISC", categoryName: "Miscellaneous", checked: true },
    { categoryCode: "PMNT", categoryName: "Payments", checked: true },
    { categoryCode: "PTFO", categoryName: "Portfolio", checked: true },
    { categoryCode: "STMT", categoryName: "Statements of docs", checked: true },
    { categoryCode: "TRD", categoryName: "Trades", checked: true },
    { categoryCode: "VAL", categoryName: "Valuations", checked: true },
    { categoryCode: "LL", categoryName: "Lombard Lending", checked: true },
    { categoryCode: "MD", categoryName: "Mortgage documents", checked: true },
    {
      categoryCode: "CD",
      categoryName: "Classification documents",
      checked: true,
    },
    { categoryCode: "ADH", categoryName: "Ad hoc", checked: true },
  ];

  filterStatusOptions = [
    { id: "all", value: "Todos", isSelected: false },
    { id: "read", value: "Leídos", isSelected: true },
    { id: "unread", value: "No leídos", isSelected: false },
  ];

  selectedPortfolio = [
    {
      id: "1010338577",
      additions: {
        IBAN: "GB89CRES40623910338577",
        balance: "281795.53",
        description: "CURRENT ACCOUNT 10-10338577 ./. Interest Rate 0.0000% ",
        accountCurrency: "GBP",
      },
    },
    {
      id: "1010338588",
      additions: {
        IBAN: "GB83CRES40623910338588",
        balance: "-207459.96",
        description: "CURRENT ACCOUNT 10-10338588 ./. Interest Rate 0.0000% ",
        accountCurrency: "USD",
      },
    },
    {
      id: "1010338596",
      additions: {
        IBAN: "GB61CRES40623910338596",
        balance: "232.78",
        description: "CURRENT ACCOUNT 10-10338596 ./. Interest Rate -0.4% ",
        accountCurrency: "EUR",
      },
    },
    {
      id: "1010338607",
      additions: {
        IBAN: "GB55CRES40623910338607",
        balance: "0.00",
        description: "CURRENT ACCOUNT 10-10338607 ./. Interest Rate -0.8% ",
        accountCurrency: "CHF",
      },
    },
    {
      id: "1010338618",
      additions: {
        IBAN: "GB49CRES40623910338618",
        balance: "1879506.0",
        description: "CURRENT ACCOUNT 10-10338618 ./. Interest Rate 0.0000% ",
        accountCurrency: "JPY",
      },
    },
    {
      id: "1010338626",
      additions: {
        IBAN: "GB27CRES40623910338626",
        balance: "0.000",
        description:
          "CUSTOMER GOLD METAL ACCOUNT - XAU 10-10338626 ./. Interest Rate 0.0000% ",
        accountCurrency: "XAU",
      },
    },
  ];

  people: any[] = [
    {
      name: "Douglas  Pace",
    },
    {
      name: "Mcleod  Mueller",
    },
    {
      name: "Day  Meyers",
    },
    {
      name: "Aguirre  Ellis",
    },
    {
      name: "Cook  Tyson",
    },
  ];

  selectedTabIndex(e: any) {
    this.indexClicked = e;
  }

  ngOnInit(): void {}

  selectedCategories(selectedCategories: ISelectedCategories[]) {
    // nothing to do here it is just to test it
  }

  updateFilterStatus(data: IStatusData[]) {
    // nothing to do here it is just to test it
  }
}
