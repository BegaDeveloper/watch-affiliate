import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @ViewChild('navbar', { static: true }) navbar: any;

  hideNavbar() {
    this.navbar.hide();
  }

  constructor() {}
  ngOnInit(): void {}
}
