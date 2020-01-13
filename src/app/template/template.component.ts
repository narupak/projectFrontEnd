import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {

  constructor() { }

  display : boolean
  ngOnInit() {
  }

  emitDisplay(event){
    this.display = event
    console.log(event);
  }

}
