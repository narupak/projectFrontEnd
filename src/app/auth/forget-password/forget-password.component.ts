import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  constructor() { }

  currentState : boolean;
  @Output() emitState = new EventEmitter();

  ngOnInit() {
  }

  changeState(){
    this.currentState = !this.currentState
    this.emitState.emit(false);
  }

}
