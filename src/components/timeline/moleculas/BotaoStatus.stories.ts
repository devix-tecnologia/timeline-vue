import BotaoStatus from './BotaoStatus.vue';
import { Meta, StoryFn } from '@storybook/vue3';

export default {
  title: 'Devix/Eventos/Moleculas/BotaoStatus',
  component: BotaoStatus,
  argTypes: {
    aparencia: {
      control: { type: 'select' },
      options: ['outline', 'preenchido'],
    },
    status: {
      control: { type: 'select' },
      options: ['planejado', 'atrasado', 'realizado', 'cancelado', 'adiado'],
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

export const Atrasado = Template.bind({});
Atrasado.args = {
  status: 'atrasado',
  aparencia: 'outline',
};

export const Realizado = Template.bind({});
Realizado.args = {
  status: 'realizado',
  aparencia: 'outline',
};

export const Cancelado = Template.bind({});
Cancelado.args = {
  status: 'cancelado',
  aparencia: 'outline',
};

export const Adiado = Template.bind({});
Adiado.args = {
  status: 'adiado',
  aparencia: 'outline',
};
