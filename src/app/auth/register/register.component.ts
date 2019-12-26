import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  currentState: boolean;
  @Output() emitState = new EventEmitter();

  ngOnInit() {
  }

  changeState(){
    this.currentState = !this.currentState
    this.emitState.emit(false);
  }

}
