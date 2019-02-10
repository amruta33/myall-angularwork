import { Directive, HostBinding, OnInit, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputzoom]'
})
export class InputzoomDirective implements OnInit {

  @HostBinding('style.width')
  bkCl1: string

  @Input()
  dfCl1: string

  constructor() { }

  ngOnInit() {
    this.bkCl1 = this.dfCl1
  }

  widthIn() {
    this.bkCl1 =  '77px'
console.log(this.bkCl1)
  }

  widthOut() {
    this.bkCl1 =  '400px'
console.log(this.bkCl1)
  }
  @HostListener('mouseenter')
  msIn() {
    this.widthIn()
  }

  @HostListener('mouseleave')
  msLv() {
    this.widthOut()
  }
}
