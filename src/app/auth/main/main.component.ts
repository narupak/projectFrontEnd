import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private apiService : ApiService) { }

  formRegister : FormGroup;
  ngOnInit() {
    this.initForm();
  }

  register(){
    this.apiService.register(this.formRegister.getRawValue()).subscribe();
  }

  initForm(){
    this.formRegister = new FormGroup({
      username : new FormControl(null),
      password : new FormControl(null),
      firstName : new FormControl(null),
      lastName : new FormControl(null),
      tel : new FormControl(null),
      email : new FormControl(null),
      gender : new FormControl(null)
    })
  }

}
