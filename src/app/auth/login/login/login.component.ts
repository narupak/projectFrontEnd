import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(private router : Router) { }
  currentState : boolean;
  @Output() emitState = new EventEmitter();
  @Output() stateFlip = new EventEmitter();

  ngOnInit() {
  }

  changeState(){
    this.currentState = !this.currentState
    this.emitState.emit(true);
    this.stateFlip.emit('register');
  }

  changeStateForget(){
    this.currentState = !this.currentState
    this.emitState.emit(true);
    this.stateFlip.emit('forget');
  }
  navigateProgram(){
    this.router.navigate(['/program']);
  }

}
