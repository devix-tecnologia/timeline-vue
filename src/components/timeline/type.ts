export type Perfil = {
  nome: string;
  imagem: string | null;
  icone: string | null;
};

export type Categoria = {
  nome: string;
  icone: string;
};

export type AoClicarEvento = (evento: Evento) => void;

export type Evento = {
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
  aoClicar?: AoClicarEvento;
  atual: boolean;
  scroll: boolean;
};
