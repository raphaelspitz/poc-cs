import { Component, OnInit } from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
} from "@angular/animations";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [
    trigger("animationCollapse", [
      state("small", style({ height: "0px" })),
      state("large", style({ height: "130px" })),
      transition("small <=> large", animate("250ms ease-in")),
    ]),
  ],
})
export class AppComponent implements OnInit {
  title = "poc-cs";
  isExpanded = false;

  state: string = "small";

  ptfandAccountsDatas = [
    {
      description: "Discretionary",
      additions: { portfolioId: "117424-30" },
      valuation: { amount: "4504006.00", currencyCode: "GBP" },
      account: "Reference currency (GBP)",
      holder: "590879 Patrick M Wilson - 590879 Patrick M Wilson - 590879",
      performanceYTDpct: -3.54,
      cashAccounts: [
        {
          id: "1010338577",
          additions: {
            IBAN: "GB89CRES40623910338577",
            balance: "161025.89",
            description:
              "CURRENT ACCOUNT 10-10338577 ./. Interest Rate 0.0000% ",
            accountCurrency: "GBP",
          },
        },
        {
          id: "1010338588",
          additions: {
            IBAN: "GB83CRES40623910338588",
            balance: "3227.64",
            description:
              "CURRENT ACCOUNT 10-10338588 ./. Interest Rate 0.0000% ",
            accountCurrency: "USD",
          },
        },
        {
          id: "1010338596",
          additions: {
            IBAN: "GB61CRES40623910338596",
            balance: "4132.51",
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
            balance: "2137608.0",
            description:
              "CURRENT ACCOUNT 10-10338618 ./. Interest Rate 0.0000% ",
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
      ],
      isExpandedState: false,
    },
    {
      description: "Discretionary",
      additions: { portfolioId: "117424-30" },
      valuation: { amount: "4504006.00", currencyCode: "GBP" },
      account: "Reference currency (GBP)",
      holder: "590879 Patrick M Wilson - 590879 Patrick M Wilson - 590879",
      performanceYTDpct: -3.54,
      cashAccounts: [
        {
          id: "1010338577",
          additions: {
            IBAN: "GB89CRES40623910338577",
            balance: "161025.89",
            description:
              "CURRENT ACCOUNT 10-10338577 ./. Interest Rate 0.0000% ",
            accountCurrency: "GBP",
          },
        },
        {
          id: "1010338588",
          additions: {
            IBAN: "GB83CRES40623910338588",
            balance: "3227.64",
            description:
              "CURRENT ACCOUNT 10-10338588 ./. Interest Rate 0.0000% ",
            accountCurrency: "USD",
          },
        },
        {
          id: "1010338596",
          additions: {
            IBAN: "GB61CRES40623910338596",
            balance: "4132.51",
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
            balance: "2137608.0",
            description:
              "CURRENT ACCOUNT 10-10338618 ./. Interest Rate 0.0000% ",
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
      ],
      isExpandedState: false,
    },
    {
      description: "Discretionary",
      additions: { portfolioId: "117424-30" },
      valuation: { amount: "4504006.00", currencyCode: "GBP" },
      account: "Reference currency (GBP)",
      holder: "590879 Patrick M Wilson - 590879 Patrick M Wilson - 590879",
      performanceYTDpct: -3.54,
      cashAccounts: [
        {
          id: "1010338577",
          additions: {
            IBAN: "GB89CRES40623910338577",
            balance: "161025.89",
            description:
              "CURRENT ACCOUNT 10-10338577 ./. Interest Rate 0.0000% ",
            accountCurrency: "GBP",
          },
        },
        {
          id: "1010338588",
          additions: {
            IBAN: "GB83CRES40623910338588",
            balance: "3227.64",
            description:
              "CURRENT ACCOUNT 10-10338588 ./. Interest Rate 0.0000% ",
            accountCurrency: "USD",
          },
        },
        {
          id: "1010338596",
          additions: {
            IBAN: "GB61CRES40623910338596",
            balance: "4132.51",
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
            balance: "2137608.0",
            description:
              "CURRENT ACCOUNT 10-10338618 ./. Interest Rate 0.0000% ",
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
      ],
      isExpandedState: false,
    },
  ];

  ngOnInit(): void {
    for (let index = 0; index < this.ptfandAccountsDatas.length; index++) {
      this.ptfandAccountsDatas[index]["state"] = "small";
      this.ptfandAccountsDatas[index]["isExpanded"] = false;
    }
  }

  collapsse(i: number) {
    this.ptfandAccountsDatas[i]["state"] =
      this.ptfandAccountsDatas[i]["state"] === "small" ? "large" : "small";
    this.ptfandAccountsDatas[i]["isExpanded"] = !this.ptfandAccountsDatas[i][
      "isExpanded"
    ];
  }
}
