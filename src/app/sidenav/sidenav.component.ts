import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  clicked1 = 'primary';
  clicked2 = 'primary';
  clicked3 = 'primary';

  constructor() { }

  ngOnInit(): void {
  }

  /*onNavigate1() {
    this.clicked1 = 'accent';
    this.clicked2 = 'primary';
    this.clicked3 = 'primary';
  }

  onNavigate2() {
    this.clicked2 = 'accent';
    this.clicked1 = 'primary';
    this.clicked3 = 'primary';
  }

  onNavigate3() {
    this.clicked3 = 'accent';
    this.clicked2 = 'primary';
    this.clicked1 = 'primary';
  }*/

}
