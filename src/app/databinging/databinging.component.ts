import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinging',
  templateUrl: './databinging.component.html',
  styleUrls: ['./databinging.component.css']
})
export class DatabingingComponent implements OnInit {
 name = 'Amruta';
  constructor() { }

  ngOnInit() {
  }
 date() {
   return new Date();
 }
}
