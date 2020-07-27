import { Component, OnInit, AfterContentInit, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from './components/child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'slider-example';
  public userLoggedIn: boolean = false
  @ViewChild(ChildComponent) childComponentRef: ChildComponent
  constructor() {
  }

  ngAfterViewInit() {
    this.childComponentRef.message = "this message is from parent component"
  }

  sayHelloFromParent(name: string) {
    alert(`hello, ${name}, from child-second component`)
  }
}
