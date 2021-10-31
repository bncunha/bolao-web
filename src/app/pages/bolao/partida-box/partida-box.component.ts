import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-partida-box',
  templateUrl: './partida-box.component.html',
  styleUrls: ['./partida-box.component.scss']
})
export class PartidaBoxComponent implements OnInit {
  @Input() partida: any;
  @Input() showResultado: boolean = false;
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() isAovivo: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
