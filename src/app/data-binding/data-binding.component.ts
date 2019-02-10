import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
name = 'me';
type = 'text';
type1 = 'password';
alertStatus = {
  isWarning : false,
  isSuccess : false,
  isDanger : false,
  isInfo : false
};
 myVar = '';
 myVar1 = '';
 res = '';
myAdd() {
 this.res = this.myVar + this.myVar1 ;
 }

  constructor() { }

  ngOnInit() {
  }
date() {
  return new Date();
}
myclick(evdt: any) {
  console.log(evdt);
}
makeAlert(which: string) {
if (which === 'success') {
  this.alertStatus.isSuccess = true;
this.alertStatus.isInfo = false;
this.alertStatus.isDanger = false;
this.alertStatus.isWarning = false;
} else if (which === 'danger') {
  this.alertStatus.isSuccess = false;
this.alertStatus.isInfo = false;
this.alertStatus.isDanger = true;
this.alertStatus.isWarning = false;
} else if (which === 'info') {

  this.alertStatus.isSuccess = false;
this.alertStatus.isInfo = true;
this.alertStatus.isDanger = false;
this.alertStatus.isWarning = false;
} else {

  this.alertStatus.isSuccess = false;
this.alertStatus.isInfo = false;
this.alertStatus.isDanger = false;
this.alertStatus.isWarning = true;
}
}
}
