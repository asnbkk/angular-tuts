import { Component, OnInit } from '@angular/core';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-child-sutdent',
  templateUrl: './child-sutdent.component.html',
  styleUrls: ['./child-sutdent.component.css']
})
export class ChildSutdentComponent implements OnInit {

  constructor(private _interactionService: InteractionService) { }

  ngOnInit(): void {
    this._interactionService.teacherMessage$
      .subscribe(
        message => {
          if(message === "Good Morning") {
            alert("good morning ")
          }
          else if(message === "Well done") {
            alert('thank you teacher')
          }
        }
      )
  }

}
