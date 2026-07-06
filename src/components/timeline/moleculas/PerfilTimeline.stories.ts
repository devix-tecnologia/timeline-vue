import PerfilTimeline from './PerfilTimeline.vue';
import { Meta } from '@storybook/vue3-vite';

export default {
  title: 'Devix/Moleculas/PerfilTimeline',
  component: PerfilTimeline,
  parameters: {
    docs: {
      description: {
        component: `Componente de cabeçalho que exibe o avatar e nome do perfil do usuário. Suporta exibição de imagem ou ícone como fallback, além do formato reduzido.

## 🎯 Quando usar
- No topo da timeline para identificar o perfil ativo
- Em cabeçalhos de detalhes do evento para mostrar o paciente ou profissional responsável
- Sempre que for necessário exibir a identidade visual do perfil de forma compacta

## 🚫 Quando NÃO usar
- Quando não houver nome de perfil disponível (o componente não renderiza nada sem nome)
- Em espaços muito restritos onde apenas um avatar ou ícone seja suficiente — prefira o componente AvatarTimeline diretamente

## ♿ Acessibilidade
- O AvatarTimeline interno utiliza \`altText\` para descrever a imagem para leitores de tela
- O nome do perfil é renderizado como \`<h2>\`, mantendo a hierarquia de títulos
- O contraste de cores segue o esquema de cores do tema (cor-primaria como fundo)`,
      },
    },
  },
  argTypes: {
    nomePerfil: {
      description:
        'Nome do perfil a ser exibido. Se vazio ou undefined, o componente não renderiza nada.',
      table: { type: { summary: 'string' } },
    },
    imagemPerfil: {
      description: 'URL da imagem do avatar. Tem precedência sobre iconePerfil.',
      table: { type: { summary: 'string' } },
    },
    iconePerfil: {
      description: 'Nome do ícone Material Symbols a ser exibido quando não há imagem.',
      table: { type: { summary: 'string' } },
    },
    formatoReduzido: {
      description:
        'Quando true, exibe o perfil em formato compacto (sem fundo colorido, com avatar menor).',
      table: { type: { summary: 'boolean' }, defaultValue: { summary: 'false' } },
      control: 'boolean',
    },
  },
} as Meta<typeof PerfilTimeline>;

const avatar =
  'https://images.unsplash.com/photo-1526080652727-5b77f74eacd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80';

export const ComImagem = {
  args: {
    imagemPerfil: avatar,
    nomePerfil: 'Dona Maria',
    iconePerfil: '',
    formatoReduzido: false,
  },
};
ComImagem.parameters = {
  docs: {
    description: {
      story: 'Perfil completo com fotografia do usuário. A imagem tem precedência sobre o ícone.',
    },
  },
};

export const ComIcone = {
  args: {
    imagemPerfil: '',
    nomePerfil: 'Dona Maria',
    iconePerfil: 'person',
    formatoReduzido: false,
  },
};
ComIcone.parameters = {
  docs: {
    description: {
      story: 'Perfil com ícone Material Symbols como fallback quando não há imagem disponível.',
    },
  },
};

export const ApenasTitulo = {
  args: {
    imagemPerfil: '',
    nomePerfil: 'Dona Maria',
    iconePerfil: '',
    formatoReduzido: false,
  },
};
ApenasTitulo.parameters = {
  docs: {
    description: {
      story:
        'Exibe apenas o nome do perfil, sem imagem ou ícone. Útil quando nenhum recurso visual está disponível.',
    },
  },
};

export const FormatoReduzido = {
  args: {
    imagemPerfil: '',
    nomePerfil: 'Dona Maria',
    iconePerfil: 'person',
    formatoReduzido: true,
  },
};
FormatoReduzido.parameters = {
  docs: {
    description: {
      story:
        'Formato compacto utilizado em cabeçalhos de detalhes do evento. Remove o fundo colorido e reduz o tamanho do avatar.',
    },
  },
};
