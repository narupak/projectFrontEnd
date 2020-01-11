import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  ngOnInit(){
  }

  // changeState(){
  //   this.currentState = !this.currentState
  //   this.emitState.emit(true);
  //   this.stateFlip.emit('register');
  // }
}
