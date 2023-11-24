import { render, waitFor, fireEvent } from '@testing-library/vue';
import Timeline from './Timeline.vue';
import { dadosPerfil, dadosEventos } from './Timeline.mock';
import { Evento } from '../type';

describe('Timeline.vue', () => {
  it('renderiza PerfilTimeline quando passado como propriedade', () => {
    const props = {
      perfilTimeline: dadosPerfil,
      eventosTimeline: [],
    };

    const { getByTestId } = render(Timeline, { props });

    expect(getByTestId('perfilTimeline')).toBeTruthy();
  });

  it('renderiza EventoTimeline quando passado como propriedade', () => {
    const props = {
      perfilTimeline: dadosPerfil,
      eventosTimeline: dadosEventos,
    };

    const { getByTestId } = render(Timeline, { props });

    props.eventosTimeline.forEach((evento, index) => {
      const testid = `evento-timeline-${index}`;
      const elemento = getByTestId(testid);
      expect(elemento).toBeTruthy();
    });
  });

  it('emite "eventoClick" quando clicado em um evento da timeline', async () => {
    // Define as props que você deseja passar para o componente
    const props = {
      perfilTimeline: dadosPerfil,
      eventosTimeline: dadosEventos,
    };

    const { emitted, getByTestId, debug } = render(Timeline, { props });
    //obtém o evento 1 ao invés do zero, pois o zero é o separador de data
    const elemento = getByTestId('evento-timeline-1');
    expect(elemento).toBeTruthy();
    await fireEvent.click(elemento);
    // Verifica se o evento foi emitido
    expect(emitted().eventoClick).toBeTruthy();
  });

  it('não emite "eventoClick" quando clicado em um evento não clicavel da timeline', async () => {
    // Define as props que você deseja passar para o componente
    const props = {
      perfilTimeline: dadosPerfil,
      eventosTimeline: [{
        data: new Date("2023-04-26T19:00Z"),
        previsto: new Date("2023-04-26T19:00Z"),
        realizado: new Date("2023-04-26T19:30Z"),
        tolerancia: 10,
        titulo: "Vacina da Covid",
        subtitulo: "Posto de saúde do bairro",
        destaque: "",
        categoria: {
          nome: "Vacina",
          icone: "vaccines",
        },
        status: "realizado",
        criticidade: "media",
        atual: false,
        scroll: false,
        clicavel: false, //desabilita o click no evento
      } satisfies Evento],
    };

    const { emitted, getByTestId } = render(Timeline, { props });
    
    //obtém o evento 1 ao invés do zero, pois o zero é o separador de data
    const elemento = getByTestId('evento-timeline-1');
    
    expect(elemento).toBeTruthy();
    await fireEvent.click(elemento);

    // Verifica se o evento NÃO foi emitido
    expect(emitted().eventoTimelineClicked).toBeUndefined();
  });
});
