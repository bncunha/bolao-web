import { PartidaResponse } from "./Partida.response";

export interface PartidasPorCampeonatoResponse  {
  campeonato: {
    ano: string;
    dataFim: string;
    dataInicio: string;
    id: number;
    idApiFootball: string;
    nome: string;
  };
  partidas: PartidaResponse[];
}
