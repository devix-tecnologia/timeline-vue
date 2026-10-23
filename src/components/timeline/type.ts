export type Perfil = {
  nome: string;
  imagem?: string;
  icone?: string;
  /** Função ou cargo, mostrado abaixo do nome (ex.: "Mensageira da FilosofiA"). */
  descricao?: string;
};

export type Categoria = {
  nome: string;
  icone: string;
};

export type Status = 'atrasado' | 'adiantado' | 'adiado' | 'realizado' | 'planejado' | 'cancelado';

export type Criticidade = 'baixa' | 'media' | 'alta';

/** Ação que o evento oferece, mostrada como botão (ex.: "Concluir", "Reagendar"). */
export type AcaoEvento = {
  /** Identifica a ação para quem trata o clique. */
  id: string;
  rotulo: string;
  /** Nome do ícone do Material Symbols. */
  icone?: string;
  /** Botão preenchido, para a ação principal do evento. */
  principal?: boolean;
  /** Mostra só o ícone; o rótulo vira o nome acessível do botão. */
  apenasIcone?: boolean;
};

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
  acoes?: AcaoEvento[];
};
