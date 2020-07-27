import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-second',
  templateUrl: './child-second.component.html',
  styleUrls: ['./child-second.component.css']
})
export class ChildSecondComponent implements OnInit {
  name: string = "Assan"
  @Output() sayHello = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  
  hello() {
    this.sayHello.emit(this.name)
  }
}
