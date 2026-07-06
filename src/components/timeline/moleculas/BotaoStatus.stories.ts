import BotaoStatus from './BotaoStatus.vue';
import { Meta, StoryFn } from '@storybook/vue3-vite';

export default {
  title: 'Devix/Moleculas/BotaoStatus',
  component: BotaoStatus,
  parameters: {
    docs: {
      description: {
        component: `Botão que exibe o status de um evento combinando um ícone de status com o texto descritivo. Suporta as aparências "outline" e "preenchido".

## 🎯 Quando usar
- Em formulários de edição de status do evento
- Como controle para alterar o estado de um evento na timeline
- Em painéis de ação onde o usuário pode confirmar ou modificar o status

## 🚫 Quando NÃO usar
- Apenas para exibir o status sem interação — prefira o componente StatusEvento ou IconeStatus
- Em contextos onde o clique não deve disparar nenhuma ação

## ♿ Acessibilidade
- O botão nativo garante foco por teclado
- O ícone de status é decorativo e acompanhado de texto para clareza
- A cor da borda varia conforme o status, mas o texto do status é sempre exibido`,
      },
    },
  },
  argTypes: {
    status: {
      description: 'Status do evento a ser exibido no botão.',
      table: { type: { summary: 'Status' }, defaultValue: { summary: 'planejado' } },
      control: { type: 'select' },
      options: ['planejado', 'atrasado', 'realizado', 'cancelado', 'adiado'],
    },
    aparencia: {
      description: 'Estilo visual do botão: outline (borda) ou preenchido (fundo colorido).',
      table: { type: { summary: 'Aparencia' } },
      control: { type: 'select' },
      options: ['outline', 'preenchido'],
    },
  },
} as Meta<typeof BotaoStatus>;

const Template: StoryFn<typeof BotaoStatus> = (args) => ({
  components: { BotaoStatus },
  setup() {
    const handleClick = () => {
      alert('Clicado no botão.');
    };

    return { args, handleClick };
  },
  template:
    '<BotaoStatus :aparencia="args.aparencia" @click="handleClick" :status="args.status" />',
});

export const Planejado = Template.bind({});
Planejado.args = {
  status: 'planejado',
  aparencia: 'outline',
};
Planejado.parameters = {
  docs: {
    description: {
      story: 'Botão de status "planejado" no estilo outline. Estado padrão para eventos futuros.',
    },
  },
};

export const Atrasado = Template.bind({});
Atrasado.args = {
  status: 'atrasado',
  aparencia: 'outline',
};
Atrasado.parameters = {
  docs: {
    description: {
      story:
        'Botão de status "atrasado" no estilo outline. Indica que o evento não ocorreu no horário previsto.',
    },
  },
};

export const Realizado = Template.bind({});
Realizado.args = {
  status: 'realizado',
  aparencia: 'outline',
};
Realizado.parameters = {
  docs: {
    description: {
      story:
        'Botão de status "realizado" no estilo outline. Indica conclusão do evento com sucesso.',
    },
  },
};

export const Cancelado = Template.bind({});
Cancelado.args = {
  status: 'cancelado',
  aparencia: 'outline',
};
Cancelado.parameters = {
  docs: {
    description: {
      story: 'Botão de status "cancelado" no estilo outline. Indica que o evento não ocorrerá.',
    },
  },
};

export const Adiado = Template.bind({});
Adiado.args = {
  status: 'adiado',
  aparencia: 'outline',
};
Adiado.parameters = {
  docs: {
    description: {
      story: 'Botão de status "adiado" no estilo outline. Indica que o evento foi remarcado.',
    },
  },
};
