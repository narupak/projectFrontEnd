import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/service/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
    if(this.formRegister.valid){
      this.apiService.register(this.formRegister.getRawValue()).subscribe();
      this.formRegister.reset()
    }
  }

  initForm(){
    this.formRegister = new FormGroup({
      username : new FormControl(null , Validators.required),
      password : new FormControl(null , Validators.required),
      firstName : new FormControl(null , Validators.required),
      lastName : new FormControl(null , Validators.required),
      tel : new FormControl(null , Validators.required),
      email : new FormControl(null , Validators.required),
      gender : new FormControl(null , Validators.required)
    })
  }

}
