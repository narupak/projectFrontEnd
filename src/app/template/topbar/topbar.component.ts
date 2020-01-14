import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';
import { FormGroup, FormControl } from '@angular/forms';
import { ApiService } from 'src/app/shared/service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  @Input() stateTopbar;
  items: MenuItem[];
  formLogin : FormGroup;
  constructor(private apiService : ApiService , private router : Router) { }

  ngOnInit() {
    this.items = [
      {label: 'Stats', icon: 'fa fa-fw fa-bar-chart'},
      {label: 'Calendar', icon: 'fa fa-fw fa-calendar'},
      {label: 'Documentation', icon: 'fa fa-fw fa-book'},
      {label: 'Support', icon: 'fa fa-fw fa-support'},
      {label: 'Social', icon: 'fa fa-fw fa-twitter'}
  ];
  this.initFormLogin();
  }

  initFormLogin(){
    this.formLogin = new FormGroup({
      username : new FormControl(null),
      password : new FormControl(null)
    });
  }

  login(){
    this.apiService.login(this.formLogin.getRawValue()).subscribe((rs : any) =>{
      if(rs.error !== 'Unauthorized'){
        localStorage.setItem('access-token', rs.token);
        this.router.navigate(['/webapp']);
      }
    });
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['']);
  }

  gotoProgram(program){
    switch(program){
      case 'home':
        document.getElementById('home').className = 'selected-menu';
        document.getElementById('about').className = '';
        document.getElementById('personnal').className = '';
        document.getElementById('contact').className = '';
        document.getElementById('formRegister').className = '';
      break;
      case 'about':
        document.getElementById('home').className = '';
        document.getElementById('about').className = 'selected-menu';
        document.getElementById('personnal').className = '';
        document.getElementById('contact').className = '';
        document.getElementById('formRegister').className = '';
      break;
      case 'personnal':
        document.getElementById('home').className = '';
        document.getElementById('about').className = '';
        document.getElementById('personnal').className = 'selected-menu';
        document.getElementById('contact').className = '';
        document.getElementById('formRegister').className = '';
      break;
      case 'contact':
        document.getElementById('home').className = '';
        document.getElementById('about').className = '';
        document.getElementById('personnal').className = '';
        document.getElementById('contact').className = 'selected-menu';
        document.getElementById('formRegister').className = '';
      break;
      case 'formRegister':
        document.getElementById('home').className = '';
        document.getElementById('about').className = '';
        document.getElementById('personnal').className = '';
        document.getElementById('contact').className = '';
        document.getElementById('formRegister').className = 'selected-menu';
      break;
    }
    this.apiService.program = program;
  }

}
