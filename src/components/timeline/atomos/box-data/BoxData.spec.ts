import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import BoxData from './BoxData.vue';

describe('BoxData', () => {
  it('renderiza o numero da data', () => {
    const wrapper = mount(BoxData, {
      props: { dataNumero: 15 },
    });
    expect(wrapper.text()).toBe('15');
  });

  it('usa aparencia padrao quando nenhuma e fornecida', () => {
    const wrapper = mount(BoxData, {
      props: { dataNumero: 1 },
    });
    expect(wrapper.classes()).toContain('padrao');
  });
});
