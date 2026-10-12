/*
 * Contraste dos ícones com o fundo logo atrás deles (WCAG 1.4.11, 3:1 para elementos não textuais).
 * O axe não mede os ícones: desenhados num pseudo-elemento, não são texto do DOM; como ligadura,
 * ele os pula quando a fonte já carregou.
 */

const SELETOR_ICONES = '.material-symbols-outlined, .material-icons';
const CONTRASTE_MINIMO_ICONE = 3;

/** r, g, b de 0 a 255 e alfa de 0 a 1 */
type Rgba = [number, number, number, number];

const BRANCO: Rgba = [255, 255, 255, 1];
let contexto: CanvasRenderingContext2D | null = null;

/** Converte qualquer cor que o navegador entenda (rgb, color(srgb …) do color-mix) para RGBA. */
const paraRgba = (cor: string): Rgba => {
  contexto ??= document.createElement('canvas').getContext('2d', { willReadFrequently: true });
  if (!contexto) throw new Error('Canvas 2D indisponível para medir o contraste dos ícones');
  contexto.clearRect(0, 0, 1, 1);
  contexto.fillStyle = cor;
  contexto.fillRect(0, 0, 1, 1);
  const [r, g, b, a] = contexto.getImageData(0, 0, 1, 1).data;
  return [r, g, b, a / 255];
};

/** Pinta `cor` com a opacidade `alfa` sobre um fundo opaco. */
const sobre = ([r, g, b, a]: Rgba, fundo: Rgba, alfa = 1): Rgba => {
  const peso = a * alfa;
  return [
    r * peso + fundo[0] * (1 - peso),
    g * peso + fundo[1] * (1 - peso),
    b * peso + fundo[2] * (1 - peso),
    1,
  ];
};

const luminancia = ([r, g, b]: Rgba) => {
  const [lr, lg, lb] = [r, g, b].map((canal) => {
    const c = canal / 255;
    return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * lr + 0.7152 * lg + 0.0722 * lb;
};

const contraste = (a: Rgba, b: Rgba) => {
  const [clara, escura] = [luminancia(a), luminancia(b)].sort((x, y) => y - x);
  return (clara + 0.05) / (escura + 0.05);
};

const hex = (cor: Rgba) =>
  `#${cor
    .slice(0, 3)
    .map((canal) => Math.round(canal).toString(16).padStart(2, '0'))
    .join('')}`;

/**
 * Cor do ícone e do fundo atrás dele como aparecem na tela: empilha os fundos e as opacidades
 * dos ancestrais, da raiz até o ícone. Sem resposta quando algum deles tem imagem de fundo.
 */
const coresNaTela = (icone: Element) => {
  const cadeia: Element[] = [];
  for (let elemento: Element | null = icone; elemento; elemento = elemento.parentElement) {
    cadeia.unshift(elemento);
  }

  const pinta = (indice: number, atras: Rgba): { cor: Rgba; fundo: Rgba } | undefined => {
    const estilo = getComputedStyle(cadeia[indice]);
    if (estilo.backgroundImage !== 'none') return undefined;
    const fundo = sobre(paraRgba(estilo.backgroundColor), atras);
    const dentro =
      indice === cadeia.length - 1
        ? { cor: sobre(paraRgba(estilo.color), fundo), fundo }
        : pinta(indice + 1, fundo);
    if (!dentro) return undefined;
    const opacidade = Number(estilo.opacity);
    return {
      cor: sobre(dentro.cor, atras, opacidade),
      fundo: sobre(dentro.fundo, atras, opacidade),
    };
  };

  return pinta(0, BRANCO);
};

const visivel = (icone: HTMLElement) => {
  if (icone.getClientRects().length === 0) return false;
  if (getComputedStyle(icone).visibility !== 'visible') return false;
  const glifo = getComputedStyle(icone, '::before').content;
  return (glifo !== 'none' && glifo !== 'normal') || !!icone.textContent?.trim();
};

const CLASSE_TRANSICAO_VUE = /-(enter|leave)-(from|active|to)$/;
const emTransicao = (raiz: HTMLElement) =>
  [raiz, ...raiz.querySelectorAll('*')].some((elemento) =>
    [...elemento.classList].some((classe) => CLASSE_TRANSICAO_VUE.test(classe))
  );
const proximoQuadro = () => new Promise((resolve) => requestAnimationFrame(resolve));

/**
 * Espera as transições de entrada, que deixam o ícone translúcido por meio segundo. O Vue só
 * inicia a transição no quadro seguinte, então as classes dele contam junto com as animações.
 */
const esperaAnimacoes = async (raiz: HTMLElement) => {
  const limite = performance.now() + 5_000;
  do {
    await proximoQuadro();
    await Promise.all(
      document
        .getAnimations()
        .filter((animacao) => animacao.effect?.getTiming().iterations !== Infinity)
        .map((animacao) => animacao.finished.catch(() => undefined))
    );
  } while (emTransicao(raiz) && performance.now() < limite);
};

/** Falha quando algum ícone visível fica abaixo de 3:1 com o fundo. */
export const verificaContrasteIcones = async (raiz: HTMLElement) => {
  await esperaAnimacoes(raiz);
  const falhas = [...raiz.querySelectorAll<HTMLElement>(SELETOR_ICONES)]
    .filter(visivel)
    .flatMap((icone) => {
      const cores = coresNaTela(icone);
      if (!cores) return [];
      const razao = contraste(cores.cor, cores.fundo);
      if (razao >= CONTRASTE_MINIMO_ICONE) return [];
      const nome = icone.dataset.icone ?? icone.textContent?.trim();
      return [`"${nome}": ${hex(cores.cor)} sobre ${hex(cores.fundo)}, ${razao.toFixed(2)}:1`];
    });
  if (falhas.length) {
    throw new Error(
      `Ícones abaixo de ${CONTRASTE_MINIMO_ICONE}:1 com o fundo:\n- ${falhas.join('\n- ')}`
    );
  }
};
