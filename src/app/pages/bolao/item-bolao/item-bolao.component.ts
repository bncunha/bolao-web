import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RouterService } from 'src/app/services/core/router.service';
import { BolaoResponse } from 'src/app/services/responses/Bolao.response';

@Component({
  selector: 'app-item-bolao',
  templateUrl: './item-bolao.component.html',
  styleUrls: ['./item-bolao.component.scss']
})
export class ItemBolaoComponent implements OnInit {
  @Output() bolaoClick = new EventEmitter();
  @Input() bolao!: BolaoResponse;

  bolaoRoute = RouterService.BOLAO;

  constructor() { }

  ngOnInit(): void {
  }

}
