import { render, fireEvent, waitFor } from '@testing-library/vue';
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

  it('emite o evento "voltarClick"', async () => {
    const props = {
      perfil: dadosPerfil,
      eventos: dadosEventosDetalhados,
    };

    const { getByTestId, emitted } = render(TemplateTimeline, { props });
    const elemento = getByTestId('botao-voltar');
    expect(elemento).toBeTruthy();
    await fireEvent.click(elemento);

    // Verifica se o evento foi emitido
    expect(emitted().voltarClick).toBeTruthy();
  });

  it('emit evento click ao clicar no evento clicavel da Timeline', async () => {
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

  it('Exibe o EventoDetalhado ao clicar no evento da Timeline', async () => {
    const props = {
      perfil: dadosPerfil,
      eventos: dadosEventosDetalhados,
    };

    const { getByTestId } = render(TemplateTimeline, { props });
    const elementoEvento = getByTestId('evento-timeline-1');

    expect(elementoEvento).toBeTruthy();
    await fireEvent.click(elementoEvento);

    await waitFor(() => {
      expect(getByTestId('evento-detalhado')).toBeTruthy();
    });
  });

  it('testar emissão do evento "eventoTimelineClicked"', async () => {
    const props = {
      perfil: dadosPerfil,
      eventos: dadosEventosDetalhados,
    };

    const { getByTestId } = render(TemplateTimeline, { props });
    const elementoEvento = getByTestId('evento-timeline-1');

    expect(elementoEvento).toBeTruthy();
    await fireEvent.click(elementoEvento);

    await waitFor(() => {
      expect(getByTestId('evento-detalhado')).toBeTruthy();
    });
  });

  it('testar emissão do evento "eventoStatusEditClicked"', async () => {
    const props = {
      perfil: dadosPerfil,
      eventos: dadosEventosDetalhados,
    };

    const { getByTestId } = render(TemplateTimeline, { props });
    const elementoEvento = getByTestId('evento-timeline-1');

    expect(elementoEvento).toBeTruthy();
    await fireEvent.click(elementoEvento);

    await waitFor(() => {
      expect(getByTestId('evento-detalhado')).toBeTruthy();
    });

    const editarStatus = getByTestId('botao-status');
    expect(editarStatus).toBeTruthy();
    await fireEvent.click(editarStatus);

    await waitFor(() => {
      expect(getByTestId('editar-status')).toBeTruthy();
    });
  });

  it('testar emissão do evento "eventoDetalhadoObservacoesAddClicked"', async () => {
    const props = {
      perfil: dadosPerfil,
      eventos: dadosEventosDetalhados,
    };

    const { getByTestId } = render(TemplateTimeline, { props });
    const elementoEvento = getByTestId('evento-timeline-1');

    expect(elementoEvento).toBeTruthy();
    await fireEvent.click(elementoEvento);

    await waitFor(() => {
      expect(getByTestId('evento-detalhado')).toBeTruthy();
    });

    const adicionarObservacao = getByTestId('botao-adicionar');
    expect(adicionarObservacao).toBeTruthy();
    await fireEvent.click(adicionarObservacao);

    await waitFor(() => {
      expect(getByTestId('adicionar-observacao')).toBeTruthy();
    });
  });

  it('testar emissão do evento "editarStatusSalvarClicked"', async () => {
    const props = {
      perfil: dadosPerfil,
      eventos: dadosEventosDetalhados,
    };

    const { getByTestId } = render(TemplateTimeline, { props });
    const elementoEvento = getByTestId('evento-timeline-1');

    expect(elementoEvento).toBeTruthy();
    await fireEvent.click(elementoEvento);

    await waitFor(() => {
      expect(getByTestId('evento-detalhado')).toBeTruthy();
    });

    const editarStatus = getByTestId('botao-status');
    expect(editarStatus).toBeTruthy();
    await fireEvent.click(editarStatus);

    await waitFor(() => {
      expect(getByTestId('editar-status')).toBeTruthy();
    });

    const salvarStatus = getByTestId('botao-salvar');
    expect(salvarStatus).toBeTruthy();
    await fireEvent.click(salvarStatus);
  });

  it('testar emissão do evento "editarStatusCancelarClicked"', async () => {
    const props = {
      perfil: dadosPerfil,
      eventos: dadosEventosDetalhados,
    };

    const { getByTestId } = render(TemplateTimeline, { props });
    const elementoEvento = getByTestId('evento-timeline-1');

    expect(elementoEvento).toBeTruthy();
    await fireEvent.click(elementoEvento);

    await waitFor(() => {
      expect(getByTestId('evento-detalhado')).toBeTruthy();
    });

    const editarStatus = getByTestId('botao-status');
    expect(editarStatus).toBeTruthy();
    await fireEvent.click(editarStatus);

    await waitFor(() => {
      expect(getByTestId('editar-status')).toBeTruthy();
    });

    const cancelarStatus = getByTestId('botao-cancelar');
    expect(cancelarStatus).toBeTruthy();
    await fireEvent.click(cancelarStatus);
  });

  it('testar emissão do evento "adicionarObservacaoSalvarClicked"', async () => {
    const props = {
      perfil: dadosPerfil,
      eventos: dadosEventosDetalhados,
    };

    const { getByTestId } = render(TemplateTimeline, { props });
    const elementoEvento = getByTestId('evento-timeline-1');

    expect(elementoEvento).toBeTruthy();
    await fireEvent.click(elementoEvento);

    await waitFor(() => {
      expect(getByTestId('evento-detalhado')).toBeTruthy();
    });

    const adicionarObservacao = getByTestId('botao-adicionar');
    expect(adicionarObservacao).toBeTruthy();
    await fireEvent.click(adicionarObservacao);

    await waitFor(() => {
      expect(getByTestId('adicionar-observacao')).toBeTruthy();
    });

    const salvarObservacao = getByTestId('botao-salvar');
    expect(salvarObservacao).toBeTruthy();
    await fireEvent.click(salvarObservacao);
  });

  it('testar emissão do evento "adicionarObservacaoCancelarClicked"', async () => {
    const props = {
      perfil: dadosPerfil,
      eventos: dadosEventosDetalhados,
    };

    const { getByTestId } = render(TemplateTimeline, { props });
    const elementoEvento = getByTestId('evento-timeline-1');

    expect(elementoEvento).toBeTruthy();
    await fireEvent.click(elementoEvento);

    await waitFor(() => {
      expect(getByTestId('evento-detalhado')).toBeTruthy();
    });

    const adicionarObservacao = getByTestId('botao-adicionar');
    expect(adicionarObservacao).toBeTruthy();
    await fireEvent.click(adicionarObservacao);

    await waitFor(() => {
      expect(getByTestId('adicionar-observacao')).toBeTruthy();
    });

    const cancelarObservacao = getByTestId('botao-cancelar');
    expect(cancelarObservacao).toBeTruthy();
    await fireEvent.click(cancelarObservacao);
  });

  it('acionar botao de voltar na tela de evento detalhado e voltar para a timeline', async () => {
    const props = {
      perfil: dadosPerfil,
      eventos: dadosEventosDetalhados,
    };

    const { getByTestId } = render(TemplateTimeline, { props });
    const elementoEvento = getByTestId('evento-timeline-1');

    expect(elementoEvento).toBeTruthy();
    await fireEvent.click(elementoEvento);

    await waitFor(() => {
      expect(getByTestId('evento-detalhado')).toBeTruthy();
    });

    const voltar = getByTestId('botao-voltar');
    expect(voltar).toBeTruthy();
    await fireEvent.click(voltar);
  });
});
