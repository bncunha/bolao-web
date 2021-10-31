import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bottom',
  templateUrl: './menu-bottom.component.html',
  styleUrls: ['./menu-bottom.component.scss']
})
export class MenuBottomComponent implements OnInit {

  menus = [{
    label: 'Início',
    icon: 'fa-home',
    url: '/inicio'
  }, {
    label: 'Meus bolões',
    icon: 'fa-futbol',
    url: '/boloes'
  } ]

  constructor() { }

  ngOnInit(): void {
  }

}
