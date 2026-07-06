import AvatarTimeline from './AvatarTimeline.vue';
import { Meta } from '@storybook/vue3-vite';

export default {
  title: 'Devix/Atomos/AvatarTimeline',
  component: AvatarTimeline,
  parameters: {
    docs: {
      description: {
        component: `Exibe a foto de perfil do usuário ou um ícone fallback do Material Symbols.

## 🎯 Quando usar
- Para identificar visualmente o responsável ou criador de um evento na timeline
- Quando o usuário pode ou não ter foto de perfil — o componente lida com ambos os casos

## 🚫 Quando NÃO usar
- Para ícones de categoria ou status (use IconeCategoria ou IconeStatus)
- Em contexts onde o avatar precisa ser clicável (adicione um wrapper para interação)

## ♿ Acessibilidade
- A prop \`altText\` define o texto alternativo da imagem (default: "Avatar do perfil")
- Quando apenas o ícone é exibido, o texto alternativo não é aplicado — considere usar \`aria-label\` no wrapper se o avatar for interativo
- A imagem mantém proporção quadrada via \`aspect-ratio: 1 / 1\` e \`object-fit: cover\``,
      },
    },
  },
  argTypes: {
    imagem: {
      description: 'URL da imagem de perfil do usuário.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    icone: {
      description: 'Nome do ícone do Material Symbols usado como fallback quando não há imagem.',
      table: { type: { summary: 'string' }, defaultValue: { summary: 'undefined' } },
    },
    altText: {
      description: 'Texto alternativo para a imagem de perfil.',
      table: { type: { summary: 'string' }, defaultValue: { summary: "'Avatar do perfil'" } },
    },
  },
} as Meta<typeof AvatarTimeline>;

const avatar =
  'https://images.unsplash.com/photo-1526080652727-5b77f74eacd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80';

export const Imagem = {
  args: { imagem: avatar },
};
Imagem.parameters = {
  docs: {
    description: {
      story: 'Avatar com foto de perfil real — exibe a imagem fornecida via \`imagem\`.',
    },
  },
};

export const Icone = {
  args: { icone: 'person' },
};
Icone.parameters = {
  docs: {
    description: {
      story:
        'Avatar com ícone do Material Symbols — exibido quando nenhuma \`imagem\` é fornecida.',
    },
  },
};

export const Padrao = {
  args: {},
};
Padrao.parameters = {
  docs: {
    description: {
      story:
        'Avatar padrão sem props — exibe o ícone fallback "person" quando nem \`imagem\` nem \`icone\` são fornecidos.',
    },
  },
};
