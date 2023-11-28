import { render, fireEvent } from '@testing-library/vue';
import TemplateTimeline from './TemplateTimeline.vue';
import { dadosPerfil, dadosEventosDetalhados } from './TemplateTimeline.mock';

describe('TemplateTimeline.vue', () => {
  it('emit evento click ao clicar no evento 1 da Timeline', async () => {
    const props = {
      perfil: dadosPerfil,
      eventos: dadosEventosDetalhados,
    };

    const { emitted, getByTestId } = render(TemplateTimeline, { props });
    //obtém o evento 1 ao invés do zero, pois o zero é o separador de data
    const elemento = getByTestId('evento-timeline-1');
    expect(elemento).toBeTruthy();

    await fireEvent.click(elemento);
    // Verifica se o evento foi emitido
     expect(emitted().click).toBeTruthy();

    expect(getByTestId('evento')).toBeTruthy();
  });

  it('emit evento click ao clicar no evento 2 da Timeline', async () => {
    const props = {
      perfil: dadosPerfil,
      eventos: dadosEventosDetalhados,
    };

    const { emitted, getByTestId } = render(TemplateTimeline, { props });
    const elemento = getByTestId('evento-timeline-2');
    expect(elemento).toBeTruthy();

    await fireEvent.click(elemento);
    // Verifica se o evento foi emitido
     expect(emitted().click).toBeTruthy();

    expect(getByTestId('evento')).toBeTruthy();
  });
});
