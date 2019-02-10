import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
type1 = 'number';
type2 =  'button';
TotDsp = ''

  constructor() { }

  ngOnInit() {
  }
calC(num: number) {
    console.log(num)
    this.TotDsp += num
    console.log(this.TotDsp)
  }

  CE() {
    this.TotDsp = ''
    console.log(this.TotDsp)
  }

  mkeql() {
    // tslint:disable-next-line:no-eval
    this.TotDsp = eval(this.TotDsp)
    console.log(this.TotDsp)
  }
}

