import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges {
  @Input() loggedIn: boolean
  message: string
  name: string = "Assan"

  // get loggedIn(): boolean {
  //   return this._loggedIn
  // }
  
  // @Input()
  // set loggedIn(value: boolean) {
  //   this._loggedIn = value
  //   if(value === true) {
  //     this.message = "welocme back, Assan"
  //   }
  //   else {
  //     this.message = "please, log in"
  //   }
  // }
  
  constructor() { }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    const loggedIn = changes['loggedIn']
    if(loggedIn.currentValue === true) {
      this.message = "welcome back, Assan"
    }
    else {
      this.message = "please, log in"
    }
  }

  sayHello() {
    alert("hello Assan")
  }

}
