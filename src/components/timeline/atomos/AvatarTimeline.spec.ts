import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import AvatarTimeline from './AvatarTimeline.vue';

describe('AvatarTimeline', () => {
  it('renderiza com altText padrao quando imagem e fornecida', () => {
    const wrapper = mount(AvatarTimeline, {
      props: { imagem: 'https://exemplo.com/avatar.jpg' },
    });
    expect(wrapper.find('img').attributes('alt')).toBe('Avatar do perfil');
    expect(wrapper.find('img').attributes('src')).toBe('https://exemplo.com/avatar.jpg');
  });

  it('renderiza icone quando imagem nao e fornecida', () => {
    const wrapper = mount(AvatarTimeline, {
      props: { icone: 'person' },
    });
    expect(wrapper.find('span').text()).toBe('person');
  });

  it('renderiza com altText personalizado', () => {
    const wrapper = mount(AvatarTimeline, {
      props: { imagem: 'https://exemplo.com/avatar.jpg', altText: 'Meu avatar' },
    });
    expect(wrapper.find('img').attributes('alt')).toBe('Meu avatar');
  });
});
