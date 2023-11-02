import { mount } from '@vue/test-utils';
import Timeline from './Timeline.vue';
import { dadosPerfil, dadosEventos } from './Timeline.mock';

describe('Timeline.vue', () => {
  it('renderiza PerfilTimeline quando passado como propriedade', () => {
    const wrapper = mount(Timeline, {
      props: {
        perfilTimeline: dadosPerfil,
        eventosTimeline: []
      }
    });
    expect(wrapper.find('[data-testid="perfilTimeline"]').exists()).toBe(true);
  });

  it('renderiza EventoTimeline quando passados como propriedade', () => {
    const wrapper = mount(Timeline, {
      props: {
        eventosTimeline: dadosEventos
      }
    });
    expect(wrapper.findAll('[data-testid="eventoTimeline"]').length).toBe(dadosEventos.length);
  });
});
