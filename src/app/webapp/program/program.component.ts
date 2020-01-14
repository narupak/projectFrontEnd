import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api/menuitem';
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(private router: Router,public apiService : ApiService) { }
  display: boolean = false;

  information() {
    this.router.navigate(['/program']);
  }
  showDialog() {
    this.display = true;
  }

}
