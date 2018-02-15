import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-ratting',
  templateUrl: './ratting.component.html'
})
export class RattingComponent implements OnInit {

  @Output() rated = new EventEmitter<number>()

  rates: number[] = [1, 2, 3, 4, 5]
  rate = 1
  previousRate: number

  constructor() { }

  ngOnInit() {
  }

  setRate(rate: number) {
    this.rate = rate
    this.previousRate = undefined
    this.rated.emit(this.rate)
  }

  setTemporaryRate(rate: number) {
    if (this.previousRate === undefined) {
      this.previousRate = rate
    }
    this.rate = rate
  }

  clearTemporaryRate() {
    if (this.previousRate !== undefined) {
      this.rate = this.previousRate
    }
    this.previousRate = undefined
  }

}
