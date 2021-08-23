import {
  Input,
  Component,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  ChangeDetectorRef,
  ViewChild,
} from "@angular/core";
import {
  NgbDate,
  NgbCalendar,
  NgbDateParserFormatter,
  NgbDatepicker,
} from "@ng-bootstrap/ng-bootstrap";
import { FormGroup, FormBuilder } from "@angular/forms";
import { SelectedDates } from "src/app/interface/document-custom.interfaces";

@Component({
  selector: "tk-managed-date-range-picker",
  templateUrl: "./tk-managed-date-range-picker.component.html",
  styleUrls: ["./tk-managed-date-range-picker.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TkManagedDateRangeComponent {
  private _selectedDates!: SelectedDates;
  get selectedDates(): SelectedDates {
    return this._selectedDates;
  }
  @Input() set selectedDates(value: SelectedDates) {
    this._selectedDates = value;
    this.setInitialDates(value);
  }
  @Output() selecedtDateRange = new EventEmitter<SelectedDates>();
  @ViewChild("dp", { static: true }) dp!: NgbDatepicker;
  hoveredDate: NgbDate | null = null;
  fromDate!: NgbDate | null;
  toDate!: NgbDate | null;
  maxDate: NgbDate;
  dateMode: number = 3; // 0 = Today, 1 = Last 7 days, 2 = Last 30 days, 3 = custom
  dateForm: FormGroup;
  datesToDisplay: string = "";
  isInValid: boolean = false;

  constructor(
    private calendar: NgbCalendar,
    public formatter: NgbDateParserFormatter,
    private formBuilder: FormBuilder,
    private ref: ChangeDetectorRef
  ) {
    this.dateForm = this.formBuilder.group({
      date: [],
    });
    this.maxDate = this.calendar.getToday();
  }
  setInitialDates(value: SelectedDates) {
    if (value.startDate) {
      const initialStartDate = new Date(value.startDate);
      this.fromDate = new NgbDate(
        initialStartDate.getFullYear(),
        initialStartDate.getMonth() + 1,
        initialStartDate.getDate()
      );
    } else {
      this.fromDate = null;
    }
    if (value.endDate) {
      const initialEndDate = new Date(value.endDate);
      this.toDate = new NgbDate(
        initialEndDate.getFullYear(),
        initialEndDate.getMonth() + 1,
        initialEndDate.getDate()
      );
    } else {
      this.toDate = null;
    }
    this.updateDatesToDisplay();
  }
  updateIsDateRangeInValid() {
    if (!this.fromDate && !this.toDate) {
      this.isInValid = false; // if both are not set, valid filter
    } else if (this.fromDate && this.toDate) {
      this.isInValid = false; // if both are set, valid filter
    } else {
      this.isInValid = true;
    }
  }
  updateDatesToDisplay() {
    let dates = "";
    if (!(this.fromDate || this.toDate)) {
      dates = "";
    } else {
      dates =
        (this.fromDate
          ? ("0" + this.fromDate.day).slice(-2) +
            "/" +
            ("0" + this.fromDate.month).slice(-2) +
            "/" +
            this.fromDate.year
          : "") +
        " - " +
        (this.toDate
          ? ("0" + this.toDate.day).slice(-2) +
            "/" +
            ("0" + this.toDate.month).slice(-2) +
            "/" +
            this.toDate.year
          : "");
    }
    this.datesToDisplay = dates;
    this.updateIsDateRangeInValid();
  }

  setTodaysDate() {
    if (this.dateMode !== 0) {
      this.dateMode = 0;
    }
    this.fromDate = this.calendar.getToday();
    this.toDate = this.calendar.getToday();
    this.updateDatesToDisplay();
    const updatedDates: SelectedDates = {
      startDate:
        this.fromDate.year +
        "-" +
        this.formatDigit(this.fromDate.month) +
        "-" +
        this.formatDigit(this.fromDate.day),
      endDate:
        this.toDate.year +
        "-" +
        this.formatDigit(this.toDate.month) +
        "-" +
        this.formatDigit(this.toDate.day),
    };
    updatedDates.isInValid = this.isInValid;
    this.selecedtDateRange.emit(updatedDates);
  }
  setLast7Days() {
    this.fromDate = this.calendar.getPrev(this.calendar.getToday(), "d", 7);
    this.toDate = this.calendar.getToday();
    if (this.dateMode !== 1) {
      this.dateMode = 1;
    }
    this.updateDatesToDisplay();
    const updatedDates: SelectedDates = {
      startDate:
        this.fromDate.year +
        "-" +
        this.formatDigit(this.fromDate.month) +
        "-" +
        this.formatDigit(this.fromDate.day),
      endDate:
        this.toDate.year +
        "-" +
        this.formatDigit(this.toDate.month) +
        "-" +
        this.formatDigit(this.toDate.day),
    };
    updatedDates.isInValid = this.isInValid;
    this.selecedtDateRange.emit(updatedDates);
  }
  setLast30Days() {
    this.fromDate = this.calendar.getPrev(this.calendar.getToday(), "d", 30);
    this.toDate = this.calendar.getToday();
    if (this.dateMode !== 2) {
      this.dateMode = 2;
    }
    this.updateDatesToDisplay();
    const updatedDates: SelectedDates = {
      startDate:
        this.fromDate.year +
        "-" +
        this.formatDigit(this.fromDate.month) +
        "-" +
        this.formatDigit(this.fromDate.day),
      endDate:
        this.toDate.year +
        "-" +
        this.formatDigit(this.toDate.month) +
        "-" +
        this.formatDigit(this.toDate.day),
    };
    updatedDates.isInValid = this.isInValid;
    this.selecedtDateRange.emit(updatedDates);
  }
  onCustomDate() {
    if (this.dateMode !== 3) {
      this.dateMode = 3;
    }
  }
  onDateSelection(date: NgbDate) {
    this.onCustomDate();
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (
      this.fromDate &&
      !this.toDate &&
      date &&
      date.after(this.fromDate)
    ) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
    this.updateDatesToDisplay();
    let updatedDates: SelectedDates;
    if (this.fromDate && this.toDate) {
      updatedDates = {
        startDate:
          this.fromDate.year +
          "-" +
          this.formatDigit(this.fromDate.month) +
          "-" +
          this.formatDigit(this.fromDate.day),
        endDate:
          this.toDate.year +
          "-" +
          this.formatDigit(this.toDate.month) +
          "-" +
          this.formatDigit(this.toDate.day),
      };
    } else {
      updatedDates = {
        startDate: this.fromDate
          ? this.fromDate.year +
            "-" +
            this.formatDigit(this.fromDate.month) +
            "-" +
            this.formatDigit(this.fromDate.day)
          : "",
        endDate: this.toDate
          ? this.toDate.year +
            "-" +
            this.formatDigit(this.toDate.month) +
            "-" +
            this.formatDigit(this.toDate.day)
          : "",
        isInValid: this.isInValid,
      };
    }
    updatedDates.isInValid = this.isInValid;
    this.selecedtDateRange.emit(updatedDates);
  }

  isHovered(date: NgbDate) {
    return (
      this.fromDate &&
      !this.toDate &&
      this.hoveredDate &&
      date.after(this.fromDate) &&
      date.before(this.hoveredDate)
    );
  }

  isInside(date: NgbDate) {
    return (
      this.toDate &&
      this.fromDate &&
      date.after(this.fromDate) &&
      date.before(this.toDate)
    );
  }

  isRange(date: NgbDate) {
    return (
      (this.fromDate && date.equals(this.fromDate)) ||
      (this.toDate && date.equals(this.toDate)) ||
      this.isInside(date) ||
      this.isHovered(date)
    );
  }

  validateInput(currentValue: NgbDate | null, input: string): NgbDate | null {
    const parsed = this.formatter.parse(input);
    return parsed && this.calendar.isValid(NgbDate.from(parsed))
      ? NgbDate.from(parsed)
      : currentValue;
  }
  openDatePicker(event: boolean) {
    if (event) {
      const dt = this.fromDate ? this.fromDate : this.maxDate;
      this.dp.navigateTo(dt);
    }
  }
  formatDigit(d: number) {
    return ("0" + d).slice(-2);
  }
}
