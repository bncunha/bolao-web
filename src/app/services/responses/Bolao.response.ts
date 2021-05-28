export interface BolaoResponse {
  dataFim: Date;
  dataInicio: Date;
  id: number;
  isPublico: boolean;
  maximoParticipantes: number;
  nome: string;
  senha: string;
  participantes: any[]
}
