import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent implements OnInit {

  num = Math.floor(Math.random()*9);
  constructor() { }

  ngOnInit(): void {
  }

}
