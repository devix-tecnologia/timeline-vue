import AvatarTimeline from './AvatarTimeline.vue';
import { Meta, StoryFn } from '@storybook/vue3-vite';

export default {
  title: 'Devix/Atomos/AvatarTimeline',
  component: AvatarTimeline,
  parameters: {
    docs: { description: { component: 'Imagem ou ícones do Materials Symbols do Google' } },
  },
  argTypes: {},
} as Meta<typeof AvatarTimeline>;

const Template: StoryFn<typeof AvatarTimeline> = (args) => ({
  components: { AvatarTimeline },
  setup() {
    return { args };
  },
  template: '<AvatarTimeline v-bind="args"  />',
});

const avatar =
  'https://images.unsplash.com/photo-1526080652727-5b77f74eacd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80';

export const Imagem = Template.bind({});
Imagem.args = {
  imagem: avatar,
};

export const Icone = Template.bind({});
Icone.args = {
  icone: 'person',
};

export const Padrao = Template.bind({});
