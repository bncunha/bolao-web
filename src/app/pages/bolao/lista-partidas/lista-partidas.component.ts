import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { DateUtils } from 'src/app/utils/date.util';

@Component({
  selector: 'app-lista-partidas',
  templateUrl: './lista-partidas.component.html',
  styleUrls: ['./lista-partidas.component.scss']
})
export class ListaPartidasComponent implements OnChanges {
  @Output() salvarPalpites = new EventEmitter();
  @Input() partidas?: any[];
  @Input() showResultado: boolean = false;

  agrupadosPorRodada: {rodada: number, partidas: any[]}[] = [];
  rodadaSelecionada!: number;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.partidas) {
      this.agruparPorRodada(changes.partidas.currentValue);
      if (!this.rodadaSelecionada) {
        this.setRodadaSelecionada()
      }
    }
  }

  setRodadaSelecionada() {
    if (this.agrupadosPorRodada?.length) {
      for (let grupo of this.agrupadosPorRodada) {
        for (let partida of grupo.partidas) {
          const hoje = new Date();
          const dataPartida = new Date(partida.data);
          if (DateUtils.compare(hoje, dataPartida) <= 0) {
            this.rodadaSelecionada = grupo.rodada;
            return;
          }
        }
      }
      this.rodadaSelecionada = 1;
    }
  }

  get partidasSelecionadas() {
    return this.agrupadosPorRodada.find(g => g.rodada == this.rodadaSelecionada)?.partidas;
  }

  get partidasHabilitadas() {
    if (this.showResultado) {
      return this.partidasSelecionadas?.length ? this.partidasSelecionadas.filter(p => p.resultadoMandante != null && p.resultadoVisitante != null): [];
    }
    return this.partidasSelecionadas?.length ? this.partidasSelecionadas.filter(p => !this.isDisabled(p)): [];
  }

  get total() {
    return this.partidasSelecionadas?.length && this.partidasSelecionadas.reduce((prev, cur) => {
      if (cur.palpites?.[0]?.pontuacao ) {
        return prev + cur.palpites?.[0]?.pontuacao;
      } else {
        return prev;
      }
    }, 0)
  }

  hasNext() {
    const next = this.rodadaSelecionada + 1;
    return this.agrupadosPorRodada.find(grupo => grupo.rodada == next);
  }

  hasPrev() {
    const prev = this.rodadaSelecionada - 1;
    return this.agrupadosPorRodada.find(grupo => grupo.rodada == prev);
  }

  next() {
    this.rodadaSelecionada = this.rodadaSelecionada + 1;
  }

  prev() {
    this.rodadaSelecionada = this.rodadaSelecionada - 1;
  }

  agruparPorRodada(partidas: any[]) {
    this.agrupadosPorRodada = [];
    if (!partidas) return;

    partidas.forEach(p => {
      const grupoFidned = this.agrupadosPorRodada.find(a => a.rodada == p.rodada);
      if (grupoFidned) {
        grupoFidned.partidas.push(p)
      } else {
        this.agrupadosPorRodada.push({
          rodada: p.rodada,
          partidas: [p]
        })
      }
    })
    this.agrupadosPorRodada.sort((a,b) => a.rodada - b.rodada);
  }

  isDisabled(partida: any) {
    return DateUtils.compare(new Date(), DateUtils.subtract(new Date(partida.data), {minutes: 30})) >= 0;
  }

}
