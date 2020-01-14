import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/service/api.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private apiService : ApiService,private formBuilder : FormBuilder) { }

  formRegister: FormGroup;
  public detailWarning: string;
  public validationMessage = {
    username : {
      required : 'กรุณากรอกรหัสผู้ใช้'
    },
    password : {
      required : 'กรุณากรอกรหัสผ่าน'
    },
    repassword : {
      required : 'กรูณากรอกรหัสผ่านอีกครั้ง'
    },
    gender : {
      required : 'กรุณาเลือกเพศ'
    },
    email : {
      required : 'กรูณากรอกอีเมล์'
    },
    tel : {
      required : 'กรูณากรอกเบอร์โทรศัพท์'
    },
    firstName : {
      required : 'กรูณากรอกชื่อ'
    },
    lastName : {
      required : 'กรูณากรอกนามสกุล'
    }
  }

  public formError = {
    username : '',
    password : '',
    repassword : '',
    gender : '',
    email : '',
    tel : '',
    firstName : '',
    lastName : '',
  }
  ngOnInit() {
    this.initForm();
  }

  register(){
    if(this.formRegister.valid){
      this.apiService.register(this.formRegister.getRawValue()).subscribe();
      this.formRegister.reset()
    }else{
      this.subscribeInputMessageWaring();
    }
  }

  subscribeInputMessageWaring() {
    this.formRegister
      .valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe(() => this.waringMessage());
    this.waringMessage();
  }

  waringMessage() {
    if (!this.formRegister) {
      return;
    }
    this.detailWarning = '';
    for (const field of Object.keys(this.formError)) {
      this.formError[field] = '';
      const control = this.formRegister.get(field);
      if (field === 'repassword' && control.value !== '' && control.value !== this.formRegister.get('password').value) {
        this.detailWarning += 'กรุณากรอก รหัสผ่านให้ตรงกัน' + '\n';
        this.formRegister.controls[field].setValue('');
        this.formError[field] = this.validationMessage[field].required;
      } else if (control && this.validationMessage[field] && !control.valid) {
        this.detailWarning += this.validationMessage[field].datail + '\n';
        this.formError[field] = this.validationMessage[field].required;
      }
    }

  }

  initForm(){
    this.formRegister = this.formBuilder.group({
      username : ['', [Validators.required]],
      password : ['', [Validators.required]],
      firstName : ['', [Validators.required]],
      lastName : ['', [Validators.required]],
      tel : ['', [Validators.required]],
      email : ['', [Validators.required]],
      gender : ['', [Validators.required]],
      repassword : ['', [Validators.required]],
    });
  }

}
