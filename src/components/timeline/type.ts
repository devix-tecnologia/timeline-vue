export type Perfil = {
  nome: string;
  imagem: string | null;
  icone: string | null;
};

export type Evento = {
  id: number;
  data: Date;
  previsto: Date;
  duracao: number | null;
  realizado: Date | null;
  tolerancia: number | null;
  titulo: string;
  subtitulo: string;
  destaque: string;
  categoria: {
    nome: string;
    icone: string;
  };
  status:
    | "atrasado"
    | "adiantado"
    | "adiado"
    | "realizado"
    | "planejado"
    | "cancelado";
  criticidade: string;
  acao: boolean;
};
