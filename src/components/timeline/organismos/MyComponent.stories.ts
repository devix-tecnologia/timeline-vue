// MyComponent.stories.ts

import MyComponent from './MyComponent.vue';

export default {
  title: 'Devix/Exemplos/Organismos/MyComponent',
  component: MyComponent,
  argTypes: {
    clicaramNoBotaoUpdateValue: { action: 'teste' },
    clicaramNoBotaoUpdateStatus: { action: 'clicaramNoBotaoUpdateStatus' },
  },
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyComponent },
  template:
    '<MyComponent v-bind="$props" @clicaramNoBotaoUpdateValue="clicaramNoBotaoUpdateValue" @clicaramNoBotaoUpdateStatus="clicaramNoBotaoUpdateStatus" />',
});

export const Default = Template.bind({});
Default.args = {};
