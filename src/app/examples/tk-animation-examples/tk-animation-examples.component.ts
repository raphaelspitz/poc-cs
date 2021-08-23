import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tk-animation-examples',
  templateUrl: './tk-animation-examples.component.html',
  styleUrls: ['./tk-animation-examples.component.scss'],
})
export class TkAnimationExamplesComponent implements OnInit {
  constructor() {}
  items = [
    {
      title: 'S&P 500',
      valueOne: 'Last value',
      valueTwo: 'EUR 3,237.18',
      valueThree: '15.23 (0.36%)',
      valueFour: '52 Week Range',
      valueFive: '2,524.56 - 3,258.14',
    },
    {
      title: 'S&P 500',
      valueOne: 'Last value',
      valueTwo: 'EUR 3,237.18',
      valueThree: '15.23 (0.36%)',
      valueFour: '52 Week Range',
      valueFive: '2,524.56 - 3,258.14',
    },
    {
      title: 'S&P 500',
      valueOne: 'Last value',
      valueTwo: 'EUR 3,237.18',
      valueThree: '15.23 (0.36%)',
      valueFour: '52 Week Range',
      valueFive: '2,524.56 - 3,258.14',
    },
    {
      title: 'S&P 500',
      valueOne: 'Last value',
      valueTwo: 'EUR 3,237.18',
      valueThree: '15.23 (0.36%)',
      valueFour: '52 Week Range',
      valueFive: '2,524.56 - 3,258.14',
    },
    {
      title: 'S&P 500',
      valueOne: 'Last value',
      valueTwo: 'EUR 3,237.18',
      valueThree: '15.23 (0.36%)',
      valueFour: '52 Week Range',
      valueFive: '2,524.56 - 3,258.14',
    },
    {
      title: 'S&P 500',
      valueOne: 'Last value',
      valueTwo: 'EUR 3,237.18',
      valueThree: '15.23 (0.36%)',
      valueFour: '52 Week Range',
      valueFive: '2,524.56 - 3,258.14',
    },
    {
      title: 'S&P 500',
      valueOne: 'Last value',
      valueTwo: 'EUR 3,237.18',
      valueThree: '15.23 (0.36%)',
      valueFour: '52 Week Range',
      valueFive: '2,524.56 - 3,258.14',
    },
    {
      title: 'S&P 500',
      valueOne: 'Last value',
      valueTwo: 'EUR 3,237.18',
      valueThree: '15.23 (0.36%)',
      valueFour: '52 Week Range',
      valueFive: '2,524.56 - 3,258.14',
      test: 'test',
    },
  ];
  ngOnInit() {}
  gridColumnDefinition = 'col-lg-4 col-md-6 col-sm-12 col-12';
}
