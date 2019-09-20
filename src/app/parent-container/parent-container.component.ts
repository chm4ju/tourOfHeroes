import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-container',
  templateUrl: './parent-container.component.html',
  styleUrls: ['./parent-container.component.css']
})
export class ParentContainerComponent implements OnInit {

  parentVariable = '  String from parent    ';
  incomingValue: string;
  constructor() { }
  ngOnInit() {
  }

  updateHeader(value) {
    this.incomingValue = value;
  }

}
