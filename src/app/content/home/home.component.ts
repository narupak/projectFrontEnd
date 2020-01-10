import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentState: boolean;
  @Output() emitState = new EventEmitter();
  @Output() stateFlip = new EventEmitter();

  constructor(private router: Router) { }
  items: MenuItem[];
  display: boolean = false;


  ngOnInit() {
    this.items = [
      {
        label: 'เกี่ยวกับ',
        items: [
          [
            {
              label: 'TV 1',
              items: [{ label: 'TV 1.1', routerLink: ['/about'] }]

            },

          ],
        ]
      },
      {
        label: 'ข่าวประชาสัมพันธ์',
        items: [
          [
            {
              label: 'Sports 1',
              items: [{ label: 'Sports 1.1', routerLink: ['/information'] }]
            },

          ],
        ]
      },
      {
        label: 'บุคลากร',
        items: [
          [
            {
              label: 'Entertainment 1',
              items: [{ label: 'Entertainment 1.1' }, { label: 'Entertainment 1.2' }]
            },
            {
              label: 'Entertainment 2',
              items: [{ label: 'Entertainment 2.1' }, { label: 'Entertainment 2.2' }]
            }
          ],
        ]
      },
      {
        label: 'หน้าที่',
        items: [
          [
            {
              label: 'Technology 1',
              items: [{ label: 'Technology 1.1' }, { label: 'Technology 1.2' }]
            },
            {
              label: 'Technology 2',
              items: [{ label: 'Technology 2.1' }, { label: 'Technology 2.2' }]
            },
            {
              label: 'Technology 3',
              items: [{ label: 'Technology 3.1' }, { label: 'Technology 3.2' }]
            }
          ],
        ]
      },
      {
        label: 'แผนที่',
        items: [
          [
            {
              label: 'Technology 1',
              items: [{ label: 'Technology 1.1' }, { label: 'Technology 1.2' }]
            },
            {
              label: 'Technology 2',
              items: [{ label: 'Technology 2.1' }, { label: 'Technology 2.2' }]
            },
          ]
        ]
      }
    ];
  }
  information() {
    this.router.navigate(['/program']);
  }
  showDialog() {
    this.display = true;
  }

  // changeState(){
  //   this.currentState = !this.currentState
  //   this.emitState.emit(true);
  //   this.stateFlip.emit('register');
  // }
}
