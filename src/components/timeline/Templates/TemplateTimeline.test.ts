import { render } from '@testing-library/vue';
import { mount } from '@vue/test-utils';
import TemplateTimeline from './TemplateTimeline.vue';
import { dadosPerfil, dadosEventosDetalhados } from './TemplateTimeline.mock';

describe('TemplateTimeline.vue', () => {

  it('renderiza PerfilTimeline quando passado como propriedade', () => {
    const wrapper = mount(TemplateTimeline, {
      props: {
        perfil: dadosPerfil,
        eventos: dadosEventosDetalhados,
      },
    });

    expect(wrapper.find('[data-testid="timeline"]').exists()).toBe(true);
  });

  it('renderiza EventoTimeline quando passado como propriedade', () => {
    const props = {
      perfilTimeline: dadosPerfil,
      eventosTimeline: dadosEventosDetalhados,
    };

    const { getByTestId } = render(TemplateTimeline, { props });

    props.eventosTimeline.forEach((evento, index) => {
      const testid = `evento-timeline-${index}`;
      const elemento = getByTestId(testid);
      expect(elemento).toBeTruthy();
    });
  });

});
