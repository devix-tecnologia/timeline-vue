import StatusEvento from './StatusEvento.vue';
import { Meta, StoryFn } from '@storybook/vue3-vite';

export default {
  title: 'Devix/Moleculas/StatusEvento',
  component: StatusEvento,
  parameters: {
    docs: {
      description: {
        component: `Seção que agrupa o rótulo "Status:" com o BotaoStatus correspondente. Exibe o estado atual do evento em um card com sombra.

## 🎯 Quando usar
- Na tela de detalhamento do evento para exibir e permitir alteração do status
- Sempre que o status precisar ser exibido dentro de um card com contexto visual

## 🚫 Quando NÃO usar
- Para exibir apenas o botão de status sem o rótulo — use BotaoStatus diretamente
- Em listas compactas da timeline (lá o status já é exibido via EventoTimeline)

## ♿ Acessibilidade
- O título "Status:" é renderizado como \`<h3>\`, mantendo a hierarquia semântica
- O botão interno recebe foco por teclado e dispara evento de clique
- O contraste da borda do botão varia conforme o status para identificação visual`,
      },
    },
  },
  argTypes: {
    status: {
      description: 'Status do evento a ser exibido e controlado.',
      table: { type: { summary: 'Status' } },
      control: { type: 'select' },
      options: ['planejado', 'atrasado', 'adiantado', 'realizado', 'cancelado', 'adiado'],
    },
    aparencia: {
      description: 'Estilo visual do botão de status interno.',
      table: { type: { summary: 'Aparencia' } },
      control: { type: 'select' },
      options: ['outline', 'preenchido', 'vazio'],
    },
  },
} as Meta<typeof StatusEvento>;

const Template: StoryFn<typeof StatusEvento> = (args) => ({
  components: { StatusEvento },
  setup() {
    const editarClick = () => alert('Clicou no editar status!');
    return { editarClick, args };
  },
  template: '<StatusEvento v-bind="args" :editarClick="editarClick"  />',
});

export const Planejado = Template.bind({});
Planejado.args = {
  status: 'planejado',
  aparencia: 'outline',
};
Planejado.parameters = {
  docs: { description: { story: 'Status "planejado" no estilo outline. Evento futuro agendado.' } },
};

export const Atrasado = Template.bind({});
Atrasado.args = {
  status: 'atrasado',
  aparencia: 'outline',
};
Atrasado.parameters = {
  docs: {
    description: {
      story: 'Status "atrasado" no estilo outline. Evento que não ocorreu no horário previsto.',
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
    description: { story: 'Status "realizado" no estilo outline. Evento concluído com sucesso.' },
  },
};

export const Cancelado = Template.bind({});
Cancelado.args = {
  status: 'cancelado',
  aparencia: 'outline',
};
Cancelado.parameters = {
  docs: {
    description: { story: 'Status "cancelado" no estilo outline. Evento que não ocorrerá.' },
  },
};

export const Adiado = Template.bind({});
Adiado.args = {
  status: 'adiado',
  aparencia: 'outline',
};
Adiado.parameters = {
  docs: {
    description: { story: 'Status "adiado" no estilo outline. Evento remarcado para outra data.' },
  },
};
