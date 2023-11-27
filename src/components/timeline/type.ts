export type Perfil = {
  nome: string;
  imagem?: string;
  icone?: string;
};

export type Categoria = {
  nome: string;
  icone: string;
};

export type Status = 'atrasado' | 'adiantado' | 'adiado' | 'realizado' | 'planejado' | 'cancelado';

export type Criticidade = 'baixa' | 'media' | 'alta';

export type Evento = {
  data: Date;
  previstoPara: Date;
  duracao?: number;
  realizado?: Date;
  tolerancia: number;
  titulo: string;
  subtitulo: string;
  destaque: string;
  categoria: Categoria;
  status: Status;
  criticidade: Criticidade;
  atual: boolean;
  scroll: boolean;
  clicavel?: boolean;
};
