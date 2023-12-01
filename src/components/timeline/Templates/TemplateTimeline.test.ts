import { render, fireEvent, getByRole } from '@testing-library/vue';
import TemplateTimeline from './TemplateTimeline.vue';
import { dadosPerfil, dadosEventosDetalhados } from './TemplateTimeline.mock';

describe('TemplateTimeline.vue', () => {
  it('renderiza PerfilTimeline quando passado como propriedade', () => {
    const props = {
      perfil: dadosPerfil,
      eventos: dadosEventosDetalhados,
    };

    const { getByTestId } = render(TemplateTimeline, { props });

    expect(getByTestId('template-timeline')).toBeTruthy();
  });

  it('renderiza EventoTimeline quando passado como propriedade', async () => {
    const props = {
      perfil: dadosPerfil,
      eventos: dadosEventosDetalhados,
    };

    const { emitted, getByTestId, getByText } = render(TemplateTimeline, { props });
    
    //obtém o evento 1 ao invés do zero, pois o zero é o separador de data
    const elemento = getByTestId('evento-timeline-1');
    expect(elemento).toBeTruthy();
    await fireEvent.click(elemento);
    
    // Verifica se o evento foi emitido
    expect(emitted().eventoClick).toBeTruthy();

    expect(getByTestId('evento')).toBeTruthy();
    expect(getByText('Posto de saúde do bairro')).toBeTruthy();
  });

  it('renderiza eventos na timeline', async () => {
    const props = {
      perfil: dadosPerfil,
      eventos: dadosEventosDetalhados,
    };

    const {  getByTestId } = render(TemplateTimeline, { props });
    props.eventos.forEach((evento, index) => {
      const testid = `evento-timeline-${index}`;
      const elemento = getByTestId(testid);
      expect(elemento).toBeTruthy();
    });
  });
});
