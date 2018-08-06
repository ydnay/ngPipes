import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-name',
  templateUrl: './my-name.component.html',
  styleUrls: ['./my-name.component.css']
})
export class MyNameComponent implements OnInit {

  myName: string = 'Yandy';
  originalName: string = this.myName;

  concatName() {
    this.myName += ` ${this.originalName}`;
  }

  constructor() { }

  ngOnInit() {
  }

}
