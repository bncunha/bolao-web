import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BolaoService } from 'src/app/services/api/bolao.service';
import { SeoService } from 'src/app/services/core/seo.service';
import { RankingResponse } from 'src/app/services/responses/Ranking.response';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {
  loading: boolean = false;
  ranking: RankingResponse[] = [];

  constructor(
    private bolaoService: BolaoService,
    private route: ActivatedRoute,
    seoService: SeoService
  ) {
    seoService.changeTitle('Ranking 🏆')
  }

  ngOnInit(): void {
    this.getRanking();
  }

  getRanking() {
    const id = this.route.snapshot.params.id;
    this.loading = true;
    this.bolaoService.getRanking(id).subscribe(r => {
      this.loading = false;
      this.ranking = r;
    }, err => {
      console.log(err);
      throw err;
    })
  }

}
