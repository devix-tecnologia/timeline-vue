import { render, fireEvent, waitFor } from '@testing-library/vue';
import TemplateTimeline from './TemplateTimeline.vue';
import { dadosPerfil, dadosEventosDetalhados } from './TemplateTimeline.mock';
import { EventoDetalhado } from "../typeDetalhado";
import { Status } from '../type';

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

  it('emit "eventoTimelineClicked" ao clicar no evento clicavel da TemplateTimeline', async () => {
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

  it('não emite "eventoTimelineClicked" quando clicado em um evento não clicavel do TemplateTimeline', async () => {
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

    const { emitted, getByTestId } = render(TemplateTimeline, { props });
    const elementoEvento = getByTestId('evento-timeline-1');

    expect(elementoEvento).toBeTruthy();
    await fireEvent.click(elementoEvento);

    await waitFor(() => {
      expect(getByTestId('evento-detalhado')).toBeTruthy();
    });

    const adicionarObservacao = getByTestId('botao-adicionar');
    expect(adicionarObservacao).toBeTruthy();
    await fireEvent.click(adicionarObservacao);

    // Verifica se o evento foi emitido
    expect(emitted().eventoDetalhadoObservacoesAddClicked).toBeTruthy();
  });

  it('testar emissão do evento "editarStatusSalvarClicked"', async () => {
    const props = {
      perfil: dadosPerfil,
      eventos: dadosEventosDetalhados,
    };

    const { emitted, getByTestId } = render(TemplateTimeline, { props });
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

    const elementoStatusCancelado = getByTestId('botao-status-cancelado');
    expect(elementoStatusCancelado).toBeTruthy();
    
    await fireEvent.click(elementoStatusCancelado);

    const salvarStatus = getByTestId('botao-salvar');
    expect(salvarStatus).toBeTruthy();
    await fireEvent.click(salvarStatus);

    const editarStatusSalvarClicked = emitted().editarStatusSalvarClicked;
    expect(editarStatusSalvarClicked).toBeTruthy();
    expect(editarStatusSalvarClicked).toHaveLength(1);


    const payload = editarStatusSalvarClicked[0];
    if (!Array.isArray(payload)) {
      new Error('Payload não é um array');
      return;
    }

    expect(payload).toHaveLength(3);
    
    const evento = payload[0];
    expectTypeOf(evento).toMatchTypeOf<EventoDetalhado>();
    expect(evento).toEqual(props.eventos[0]);

    const status = payload[1];
    expectTypeOf(status).toMatchTypeOf<Status>();
    expect(status).toEqual('cancelado');
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

    const { emitted, getByTestId } = render(TemplateTimeline, { props });
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

    //preench o campo observação
    const observacaoInput = getByTestId('observacao-textarea');
    expect(observacaoInput).toBeTruthy();
    const mensagemTexto = 'teste adicionando observação';
    await fireEvent.update(observacaoInput, mensagemTexto);

    const salvarStatus = getByTestId('botao-salvar');
    expect(salvarStatus).toBeTruthy();
    await fireEvent.click(salvarStatus);


    //verifica se o payload do evento é o esperado
    const adicionarClick = emitted().adicionarObservacaoSalvarClicked;
    expect(adicionarClick).toBeTruthy();
    expect(adicionarClick).toHaveLength(1);

    const payload = adicionarClick[0];
    if (!Array.isArray(payload)) {
      new Error('Payload não é um array');
      return;
    }

    expect(payload).toHaveLength(3);
    const evento = payload[0];
    expectTypeOf(evento).toMatchTypeOf<EventoDetalhado>();
    expect(evento).toEqual(props.eventos[0]);
    const mensagem = payload[1];
    expectTypeOf(mensagem).toMatchTypeOf<String>();
    expect(mensagem).toEqual(mensagemTexto);
  });

  it('testar emissão do evento "adicionarObservacaoCancelarClicked"', async () => {
    const props = {
      perfil: dadosPerfil,
      eventos: dadosEventosDetalhados,
    };

    const { emitted, getByTestId } = render(TemplateTimeline, { props });
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

    // Verifica se o evento foi emitido
    const adicionarObservacaoCancelarClicked = emitted().adicionarObservacaoCancelarClicked;

    expect(adicionarObservacaoCancelarClicked).toHaveLength(1);

    const payload = adicionarObservacaoCancelarClicked[0];
    if (!Array.isArray(payload)) {
      new Error('Payload não é um array');
      return;
    }

    expect(payload).toHaveLength(2);
    const evento = payload[0];
    expectTypeOf(evento).toMatchTypeOf<EventoDetalhado>();
    expect(evento).toEqual(props.eventos[0]);
    const mouseEvent = payload[1];
    expectTypeOf(mouseEvent).toMatchTypeOf<MouseEvent>();
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
