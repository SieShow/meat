import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-ratting',
  templateUrl: './ratting.component.html'
})
export class RattingComponent implements OnInit {

  rates: number[] = [1, 2, 3, 4, 5];
  rate: number = 1;

  constructor() { }

  ngOnInit() {
  }

}
