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
        this.apiService.token = rs.token;
        this.router.navigate(['/webapp']);
      }
    });
  }

}
