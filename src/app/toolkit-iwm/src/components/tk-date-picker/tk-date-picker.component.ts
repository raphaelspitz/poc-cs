import { Component, Input, OnInit, Output, EventEmitter, ChangeDetectorRef } from "@angular/core";

@Component({
  selector: "tk-date-picker",
  templateUrl: "./tk-date-picker.component.html",
  styleUrls: ["./tk-date-picker.component.scss"],
})

export class TkDatePicker implements OnInit {
  month:number = 0;
  year:number = 0;
  days = [];
  nextDaysArray = [];
  beforetDaysArray = [];
  firstDayIndex = 0;
  prevLastDay = 0;
  lastDayIndex = 0;
  date = new Date();
  months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  lastDay = 0;
  lastDayMonthBefore = 0;
  nextDays = 0;
  firstdDaySelected = 0;
  lastMonthDaySelected = 0;
  secondDaySelected = 0;
  isDayselected = false;
  hoverDay = 0;
  isDatePickerClicked = false;
  radioButtonDate = new Date();
  dateTosubmit = '';
  previousMonthSelected = 0;
  currentMonthSelected = 0;
  isPrevisousMonthSelected = false;
  isRadioButtonClicked = false;
  flag = false;
  isFromDateSelected = false;
  isTodateSelected = false;
  fromDate = '';
  toDate = '';
  ngOnInit(): void {
    this.renderCalendar();
  }

  constructor(private cdr: ChangeDetectorRef) {}

  resetCalendar() {
    this.days = [];
    this.nextDaysArray = [];
    this.beforetDaysArray = [];
    this.month = 0;
    this.year = 0;
    this.firstDayIndex = 0;
    if(!this.isPrevisousMonthSelected)
    this.prevLastDay = 0;
    this.lastDayIndex = 0;
    this.nextDays = 0;
    //this.isPreviousMonthSelected =
    this.date.setDate(1);
    this.month = this.date.getMonth();
    this.year = this.date.getFullYear();
    this.lastDay = new Date(
    this.date.getFullYear(),
    // 0 for the last day of the previous month 1 for the last of day the actual month
    this.date.getMonth() + 1,
     0
   ).getDate();

   this.lastDayMonthBefore = new Date(
    this.date.getFullYear(),
    // 0 for the last day of the previous month 1 for the last of day the actual month
    this.date.getMonth(),
     0
   ).getDate();

    this.firstDayIndex = this.date.getDay();

   this.lastDayIndex = new Date(
     this.date.getFullYear(),
     this.date.getMonth() + 1,
     0
   ).getDay();

   this.nextDays = 7 - this.lastDayIndex - 1;
  }

  //to populate the calendar 
  renderCalendar() {
    this.resetCalendar();
    for (let x = this.firstDayIndex-1; x > 0; x--) {
      this.days.push(0);
    }

    // making a for loop to push all the numbers of days in the array 
    for (let i = 1; i <= this.lastDay ; i++) {
        this.days.push(i);
    }
  
    //pushing the 0 from left to right in case if the first day begins a sunday
    if(this.firstDayIndex === 0 && this.lastDay === 31)
      for (let i = 1; i <= 6; i++) {
        this.days.splice(0, 0, 0);
      }

  //outline next days to put in gray 4 color
    for (let i = 0; i <= this.nextDays ; i++) {
      this.nextDaysArray.push(i+1);
    }
 }

  setCalendarToPreviousMonth() {
    this.date.setMonth(this.date.getMonth() - 1);
    this.firstdDaySelected = 0;
    this.secondDaySelected = 0;
    this.isDatePickerClicked = false
    this.isDayselected = false;
    this.isPrevisousMonthSelected = true;

    if(this.month === 0)
      this.year--;

      this.renderCalendar();
  }

  setCalendarToNextMonth() {
    if(this.month + 1 < this.radioButtonDate.getMonth()+1 || this.year <= this.radioButtonDate.getFullYear() - 1)
    {
      this.date.setMonth(this.date.getMonth() + 1);
      if(this.isPrevisousMonthSelected) {
        this.firstdDaySelected = 0;
        this.secondDaySelected = 0;
        this.isDayselected = true;
      }
      this.renderCalendar();
    }
  }

  getSelectedDay(day:number, e:any){
    if(day == 0)
      return;

    if(e.type === "click") {
      this.flag = true;
      if(!this.isDayselected) {
        this.firstdDaySelected = day;
        if(this.isPrevisousMonthSelected)
        {
          this.prevLastDay = day;
        // retenir le mois précédent
          this.previousMonthSelected = this.month + 1;
        } else {
          this.previousMonthSelected = 0;
          this.currentMonthSelected = this.radioButtonDate.getMonth()+1
        }

        this.isDayselected = true;
        this.secondDaySelected = this.firstdDaySelected;
        this.isDatePickerClicked = true;
        this.setFromDate();
      }
      else{
        if(this.radioButtonDate.getMonth()+1 === this.month+1)
          this.currentMonthSelected = this.radioButtonDate.getMonth()+1
        else
          this.currentMonthSelected = this.month+1;

        this.secondDaySelected = day;
        this.isDayselected = false;
        this.isDatePickerClicked = false;
        this.setTodate();
      }
      if(this.firstdDaySelected >=  this.secondDaySelected) {
        this.firstdDaySelected = this.secondDaySelected;
        this.isDatePickerClicked = true;
        this.isDayselected = true;
      }
      this.isRadioButtonClicked = false;

      }
      if(e.type === 'mouseenter' && this.isDatePickerClicked) {
          this.secondDaySelected = day;
      }

  }

  leavePicker() {
    if(this.isDatePickerClicked)
      this.secondDaySelected = this.firstdDaySelected;
  }

  todaySelected() {
    this.fromDate = this.radioButtonDate.getDate() + '-' + (this.radioButtonDate.getMonth()+1) + '-' + this.radioButtonDate.getFullYear();
    this.toDate = this.fromDate;
    this.isRadioButtonClicked = true;
    this.firstdDaySelected = this.radioButtonDate.getDate();
    this.secondDaySelected = this.radioButtonDate.getDate();
    this.date.setMonth(this.radioButtonDate.getMonth());
  }

  lastSeventDaysSelected() {
    this.isRadioButtonClicked = true;
    this.fromDate = this.radioButtonDate.getDate()-7 + '-' + (this.radioButtonDate.getMonth()+1) + '-' + this.radioButtonDate.getFullYear();
    this.toDate =  this.radioButtonDate.getDate() + '-' + (this.radioButtonDate.getMonth()+1) + '-' + this.radioButtonDate.getFullYear();
    this.firstdDaySelected = this.radioButtonDate.getDate();
    this.secondDaySelected = this.radioButtonDate.getDate();

    this.date.setMonth(this.radioButtonDate.getMonth());
    this.isDayselected = false;
    this.isDatePickerClicked = false;
    this.cdr.detectChanges();
    this.firstdDaySelected = this.radioButtonDate.getDate()-7;
    this.secondDaySelected = this.radioButtonDate.getDate();

  }

  last30DaysSelected() {
    this.isRadioButtonClicked = true;
    this.date.setMonth(this.radioButtonDate.getMonth());
    this.renderCalendar();
    this.isDatePickerClicked = false;
    this.isDayselected = false;
    let now = new Date()
    let last30days = new Date(now.setDate(now.getDate() - 30))

    this.fromDate = last30days.getDate() + '/' + this.radioButtonDate.getMonth() + '/' + this.radioButtonDate.getFullYear();
    this.toDate = this.radioButtonDate.getDate() + '/' + (this.radioButtonDate.getMonth()+1) + '/' + this.radioButtonDate.getFullYear();

    this.isFromDateSelected = true;
    this.isTodateSelected = true;
    this.firstdDaySelected = this.radioButtonDate.getDate();
    this.secondDaySelected = this.radioButtonDate.getDate();
    this.cdr.detectChanges();
    this.firstdDaySelected = this.radioButtonDate.getDate() - last30days.getDate();
    this.secondDaySelected = this.radioButtonDate.getDate();
  }

  setFromDate() {
    this.fromDate = this.firstdDaySelected ? this.firstdDaySelected + '/' : this.prevLastDay + '/';
    this.fromDate+= this.previousMonthSelected ? this.previousMonthSelected : this.currentMonthSelected;
    this.fromDate+= '/' + this.year;
    this.isFromDateSelected = true;
    this.isTodateSelected = false;
  }

  setTodate() {
    this.toDate = this.secondDaySelected + '/';
    this.toDate+= this.currentMonthSelected ? this.currentMonthSelected : this.previousMonthSelected;
    this.toDate+=  '/' + this.year;
    this.isTodateSelected = true;
  }
}
