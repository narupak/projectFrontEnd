import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  constructor(private apiService : ApiService) { }
  images: any[];
  role : number;
  ngOnInit() {
    this.images = [];
    this.images.push({ source: 'assets/shutterstock_rice_farmer.jpg', alt: 'Description for Image 1'});
    this.images.push({ source: 'assets/6-3.jpg-3.jpg', alt: 'Description for Image 2' });
    this.images.push({ source: 'assets/fe1.jpg', alt: 'Description for Image 3'});
    this.images.push({ source: 'assets/fe2.jpg', alt: 'Description for Image 4'});
    this.images.push({ source: 'assets/fe3.jpg', alt: 'Description for Image 5'});
    this.images.push({ source: 'assets/fe4.jpg', alt: 'Description for Image 6' });
    this.images.push({ source: 'assets/fe5.jpg', alt: 'Description for Image 7'});
    this.images.push({ source: 'assets/fe6.jpg', alt: 'Description for Image 8'});

    this.apiService.getRoleWithToken(localStorage.getItem('access-token')).subscribe((rs : any)=>{
      this.role = rs.roleId;
    });
  }
}
