import { render, fireEvent } from '@testing-library/vue';
import TemplateTimeline from './TemplateTimeline.vue';
import { dadosPerfil, dadosEventosDetalhados } from './TemplateTimeline.mock';

describe('TemplateTimeline.vue', () => {
  it('renderiza o componente TemplateTimeline', () => {
    const props = {
      perfil: dadosPerfil,
      eventos: dadosEventosDetalhados,
    };

    const { getByTestId } = render(TemplateTimeline, { props });
    const elemento = getByTestId('template-timeline');
    expect(elemento).toBeTruthy();
  });

  it('emit evento click ao clicar no evento clicavel da Timeline', async () => {
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
    expect(emitted().eventoTimelineClicked).toBeTruthy();
  });

  it('não emite "eventoClick" quando clicado em um evento não clicavel do TemplateTimeline', async () => {
    const props = {
      perfil: dadosPerfil,
      eventos: dadosEventosDetalhados,
    };

    const { emitted, getByTestId } = render(TemplateTimeline, { props });
    const elemento = getByTestId('evento-timeline-2');

    expect(elemento).toBeTruthy();
    await fireEvent.click(elemento);

    // Verifica se o evento NÃO foi emitido
    expect(emitted().eventoTimelineClicked).toBeUndefined();
  });

  it('testar emissão do evento "eventoTimelineClicked"', async () => {
    // TODO: implementar teste emissão do evento "eventoTimelineClicked
  });

  it('testar emissão do evento "eventoStatusEditClicked"', async () => {
    // TODO: implementar teste emissão do evento "eventoStatusEditClicked
  });

  it('testar emissão do evento "eventoDetalhadoObservacoesAddClicked"', async () => {
    // TODO: implementar teste emissão do evento "eventoDetalhadoObservacoesAddClicked
  });

  it('testar emissão do evento "editarStatusSalvarClicked"', async () => {
    // TODO: implementar teste emissão do evento "editarStatusSalvarClicked
  });

  it('testar emissão do evento "editarStatusCancelarClicked"', async () => {
    // TODO: implementar teste emissão do evento "editarStatusCancelarClicked
  });

  it('testar emissão do evento "adicionarObservacaoSalvarClicked"', async () => {
    // TODO: implementar teste emissão do evento "adicionarObservacaoSalvarClicked
  });

  it('testar emissão do evento "adicionarObservacaoCancelarClicked"', async () => {
    // TODO: implementar teste emissão do evento "adicionarObservacaoCancelarClicked
  });

  it('acionar botao de voltar na tela de evento detalhado e voltar para a timeline', async () => {
    // TODO: implementar teste botao de voltar na tela de evento detalhado
  });
});
