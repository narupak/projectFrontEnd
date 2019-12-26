import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  animations: [
    trigger('changeEvent', [
      state('initial', style({
        backgroundColor: 'green',
        width: '100px',
        height: '100px'
      })),
      state('final', style({
        backgroundColor: 'red',
        width: '200px',
        height: '200px'
      })),
      transition('initial=>final', animate('1500ms')),
      transition('final=>initial', animate('1000ms'))
    ]),
  ]
})
export class AuthComponent implements OnInit {

  constructor() { }
  currentState = false;
  stateFlip : string;
  ngOnInit() {
  }

  emitState(event){
    this.currentState = event;
  }

  emitStateRegis(event){
    this.currentState = event;
  }

  emitStateForget(event){
    this.currentState = event;
  }

  emitStateFlip(event){
    this.stateFlip = event;
  }

}
