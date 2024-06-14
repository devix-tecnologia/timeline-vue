import { Evento } from './type';

export type Autor = {
    nome: string;
};
export type Observacao = {
    mensagem: string;
    autor: Autor;
    criadaEm: Date;
};
export type AoAlterarEvento = (eventoDetalhado: EventoDetalhado) => void;
export type AoAdicionarObservacao = (eventoDetalhado: EventoDetalhado, observacao: Observacao) => void;
export type AoFechar = () => void;
export type EventoDetalhado = Evento & {
    observacoes: Observacao[];
};
