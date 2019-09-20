import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-child-container',
  templateUrl: './child-container.component.html',
  styleUrls: ['./child-container.component.css']
})
export class ChildContainerComponent implements OnInit {
  @Output() valueChanged = new EventEmitter<any>();
  customerInput;

  private _fromParent: string;
  @Input()
    set fromParent(name: string) {
      this._fromParent = (name && name.trim() + '!!!!') || '<no name set>';
    }
 
    get fromParent(): string { return this._fromParent; }

  constructor() { }

  sendMessageToParent(message: string = 'optional vlaue') {
    this.valueChanged.emit(message);
    alert(this.fromParent);
  }

  ngOnInit() {
  }

}
