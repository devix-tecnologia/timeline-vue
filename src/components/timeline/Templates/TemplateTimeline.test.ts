import { render, fireEvent } from '@testing-library/vue';
import TemplateTimeline from './TemplateTimeline.vue';
import { dadosPerfil, dadosEventosDetalhados } from './TemplateTimeline.mock';

describe('TemplateTimeline.vue', () => {
  it('renderiza PerfilTimeline quando passado como propriedade', () => {
    const props = {
      perfil: dadosPerfil,
      eventos: dadosEventosDetalhados,
    };

    const { getByTestId } = render(TemplateTimeline, { props });

    expect(getByTestId('timeline')).toBeTruthy();
  });

  it('renderiza EventoTimeline quando passado como propriedade', async () => {
    const props = {
      perfil: dadosPerfil,
      eventos: dadosEventosDetalhados,
    };

    const { emitted, getByTestId, debug } = render(TemplateTimeline, { props });
    //obtém o evento 1 ao invés do zero, pois o zero é o separador de data
    const elemento = getByTestId('evento-timeline-1');
    expect(elemento).toBeTruthy();
    await fireEvent.click(elemento);
    // Verifica se o evento foi emitido
    // expect(emitted().eventoTimelineClicked).toBeTruthy();

    expect(getByTestId('evento')).toBeTruthy();
  });
});
