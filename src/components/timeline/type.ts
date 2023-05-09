export type Perfil = {
  nome: string;
  imagem: string | null;
  icone: string | null;
};

export type Categoria = {
  nome: string;
  icone: string;
};

export type Evento = {
  id: string;
  data: Date;
  previsto: Date;
  duracao: number | null;
  realizado: Date | null;
  tolerancia: number;
  titulo: string;
  subtitulo: string;
  destaque: string;
  categoria: Categoria;
  status:
    | "atrasado"
    | "adiantado"
    | "adiado"
    | "realizado"
    | "planejado"
    | "cancelado";
  criticidade: "baixa" | "media" | "alta";
  acao: boolean;
  atual: boolean;
  scroll: boolean;
};
