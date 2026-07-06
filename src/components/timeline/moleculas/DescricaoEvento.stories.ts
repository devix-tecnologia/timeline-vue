import DescricaoEvento from './DescricaoEvento.vue';
import { Meta } from '@storybook/vue3-vite';

export default {
  title: 'Devix/Moleculas/DescricaoEvento',
  component: DescricaoEvento,
  parameters: {
    docs: {
      description: {
        component: `Exibe o título e subtítulo de um evento na timeline. Composto pelos átomos TituloEvento e SubtituloEvento.

## 🎯 Quando usar
- Dentro do card EventoTimeline para descrever o evento
- Sempre que um evento precisar de um título obrigatório e um subtítulo opcional

## 🚫 Quando NÃO usar
- Sem um título (campo obrigatório)
- Para descrições longas ou detalhadas — use o campo de textoDestaque ou o componente Observacoes

## ♿ Acessibilidade
- O título é renderizado internamente como \`<p>\` com classe específica
- O subtítulo é exibido apenas quando presente, evitando elementos vazios no DOM
- O espaçamento vertical se ajusta automaticamente na ausência de subtítulo`,
      },
    },
  },
  argTypes: {
    titulo: {
      description: 'Título principal do evento. Obrigatório.',
      table: { type: { summary: 'string' } },
    },
    subtitulo: {
      description:
        'Subtítulo opcional do evento. Quando ausente, o título é centralizado verticalmente.',
      table: { type: { summary: 'string' } },
    },
  },
} as Meta<typeof DescricaoEvento>;

const tituloMock = 'Título';
const subtituloMock = 'Subtítulo';

export const Simples = {
  args: { titulo: tituloMock, subtitulo: '' },
};
Simples.parameters = {
  docs: {
    description: {
      story:
        'Apenas o título, sem subtítulo. O layout se ajusta para centralizar o título verticalmente.',
    },
  },
};

export const Completa = {
  args: { titulo: tituloMock, subtitulo: subtituloMock },
};
Completa.parameters = {
  docs: {
    description: {
      story:
        'Título e subtítulo completos. O subtítulo é exibido abaixo do título em tamanho menor.',
    },
  },
};
