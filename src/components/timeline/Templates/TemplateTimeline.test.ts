import { render } from '@testing-library/vue';
import { mount } from '@vue/test-utils';
import TemplateTimeline from './TemplateTimeline.vue';
import { dadosPerfil, dadosEventos } from '../organismos/Timeline.mock';

describe('TemplateTimeline.vue', () => {

  it('renderiza PerfilTimeline quando passado como propriedade', () => {
    const wrapper = mount(TemplateTimeline, {
      props: {
        perfil: dadosPerfil,
        eventos: dadosEventos,
      },
    });

    expect(wrapper.find('[data-testid="selectEventButton"]').exists()).toBe(true);
  });

});
