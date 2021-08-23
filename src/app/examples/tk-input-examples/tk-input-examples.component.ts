import { Component, OnInit } from "@angular/core";
//import * as $ from "jquery";
declare var Tiff: any;
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs'; 

@Component({
  selector: "tk-input-examples",
  templateUrl: "./tk-input-examples.component.html",
  styleUrls: ["./tk-input-examples.component.scss"],
})
export class TkInputExamplesComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadMultipleIft();
  }

  loadItf() {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'arraybuffer';
    xhr.open(
      'GET',
      'https://people.math.sc.edu/Burkardt/data/tif/at3_1m4_02.tif'
    );
    xhr.onload = function (e) {
      var tiff = new Tiff({ buffer: xhr.response });
      var canvas = tiff.toCanvas();
      canvas.style.width = '50px';
      canvas.style.height = '50px';
      document.querySelector('.test').append(canvas);
    };
    xhr.send();
  }

  loadMultipleIft() {
    let one = this.http.get('https://people.math.sc.edu/Burkardt/data/tif/at3_1m4_02.tif', {
      responseType: 'arraybuffer' 
    });
    let two = this.http.get('https://people.math.sc.edu/Burkardt/data/tif/balloons.tif',{
      responseType: 'arraybuffer'
    });

    forkJoin([one, two]).subscribe(results => {
      console.log(results[0]);
      for (let i = 0; i < results.length; i++) {
        let tiff = new Tiff({ buffer: results[i] });
        let canvas = tiff.toCanvas();
        canvas.style.width = '50px';
        canvas.style.height = '50px';
        document.querySelector('.test').append(canvas); 
      }
    });
  }

  codePartOne: boolean = false;
  inputs = `
    <input
      type="text"
      id="regular-input" 
      name="regular-input"
      class="tk-form-control"
      placeholder="Enter text"
    />

    <input
      type="text"
      id="disabled-input"
      name="disabled-input"
      class="tk-form-control"
      placeholder="Enter text"
      disabled
    />

    <input
      type="text"
      id="error-input"
      name="disabled-input"
      class="tk-form-control tk-form-control-error"
      placeholder="Enter text"
    />
    <div class="tk-form-control-error-message">This is the error message</div>

    <div class="tk-form-control-icon">
      <input
        type="text"
        id="regular-input-right-icon"
        name="regular-input-right-icon"
        class="tk-form-control"
        placeholder="Enter text"
      />
      <div class="tk-form-control-right-icon">
        <i class="icon icon-search"></i>
      </div>
    </div>

    <div class="tk-form-control-icon">
      <div class="tk-form-control-left-icon">
        <i class="icon icon-search"></i>
      </div>
      <input
        type="text"
        id="regular-input-left-icon"
        name="regular-input-left-icon"
        class="tk-form-control"
        placeholder="Enter text"
      />
    </div>
    
    <tk-switch-toggle></tk-switch-toggle>
  `;
}
