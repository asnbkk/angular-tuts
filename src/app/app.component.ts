import { Component, OnInit, AfterContentInit, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from './components/child/child.component';
import { InteractionService } from './services/interaction.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'slider-example';
  public userLoggedIn: boolean = false

  constructor(private _interactionService: InteractionService) {
  }
  
  helloStudent() {
    this._interactionService.sendMessage('Good Morning')
  }
  appreciateStudent() {
    this._interactionService.sendMessage('Well done')
  }
  
  @ViewChild(ChildComponent) childComponentRef: ChildComponent

  ngAfterViewInit() {
    this.childComponentRef.message = "this message is from parent component"
  }

  sayHelloFromParent(name: string) {
    alert(`hello, ${name}, from child-second component`)
  }
}
