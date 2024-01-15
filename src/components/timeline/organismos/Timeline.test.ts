import { render, waitFor, fireEvent } from '@testing-library/vue';
import Timeline from './Timeline.vue';
import { dadosPerfil, dadosEventos } from './Timeline.mock';
import { Evento } from '../type';

describe('Timeline.vue', () => {
  it('emite "eventoClick" quando clicado em um evento da timeline', async () => {
    // Define as props que você deseja passar para o componente
    const props = {
      perfilTimeline: dadosPerfil,
      eventosTimeline: [
        {
          data: new Date('2023-04-26T19:00Z'),
          previstoPara: new Date('2023-04-26T19:00Z'),
          realizado: new Date('2023-04-26T19:30Z'),
          tolerancia: 10,
          titulo: 'Vacina da Covid',
          subtitulo: 'Posto de saúde do bairro',
          destaque: '',
          categoria: {
            nome: 'Vacina',
            icone: 'vaccines',
          },
          status: 'realizado',
          criticidade: 'media',
          atual: false,
          scroll: false,
          clicavel: true, //habilita o click no evento
        } satisfies Evento,
      ],
    };

    const { emitted, getByTestId } = render(Timeline, { props });

    //obtém o evento 1 ao invés do zero, pois o zero é o separador de data
    const elemento = getByTestId('evento-timeline-1');
    expect(elemento).toBeTruthy();

    await fireEvent.click(elemento);
    // Verifica se o evento foi emitido
    expect(emitted().eventoClick).toBeTruthy();

    //verifica se o payload do evento é o esperado
    const eventoClick = emitted().eventoClick;
    expect(eventoClick).toHaveLength(1);

    const payload = eventoClick[0];
    if (!Array.isArray(payload)) {
      new Error('Payload não é um array');
      return;
    }

    expect(payload).toHaveLength(2);
    const evento = payload[0];
    expectTypeOf(evento).toMatchTypeOf<Evento>();
    expect(evento).toEqual(props.eventosTimeline[0]);
  });

  it('não emite "eventoClick" quando clicado em um evento não clicavel da timeline', async () => {
    // Define as props que você deseja passar para o componente
    const props = {
      perfilTimeline: dadosPerfil,
      eventosTimeline: [
        {
          data: new Date('2023-04-26T19:00Z'),
          previstoPara: new Date('2023-04-26T19:00Z'),
          realizado: new Date('2023-04-26T19:30Z'),
          tolerancia: 10,
          titulo: 'Vacina da Covid',
          subtitulo: 'Posto de saúde do bairro',
          destaque: '',
          categoria: {
            nome: 'Vacina',
            icone: 'vaccines',
          },
          status: 'realizado',
          criticidade: 'media',
          atual: false,
          scroll: false,
          clicavel: false, //desabilita o click no evento
        } satisfies Evento,
      ],
    };

    const { emitted, getByTestId } = render(Timeline, { props });

    //obtém o evento 1 ao invés do zero, pois o zero é o separador de data
    const elemento = getByTestId('evento-timeline-1');

    expect(elemento).toBeTruthy();
    await fireEvent.click(elemento);

    // Verifica se o evento NÃO foi emitido
    expect(emitted().eventoClick).toBeUndefined();
  });

  it('não renderiza eventos que nao possuem previstoPara', async () => {
    // Criando de proposito uma entrada que tenta quebrar o componente
    const props = {
      perfilTimeline: dadosPerfil,
      eventosTimeline: [
        {
          data: new Date('2023-04-26T19:00Z'),
          // @ts-ignore
          previstoPara: null,
          realizado: new Date('2023-04-26T19:30Z'),
          tolerancia: 10,
          titulo: 'Vacina da Covid',
          subtitulo: 'Posto de saúde do bairro',
          destaque: '',
          categoria: {
            nome: 'Vacina',
            icone: 'vaccines',
          },
          status: 'realizado',
          criticidade: 'media',
          atual: false,
          scroll: false,
          clicavel: false, //desabilita o click no evento
        },
      ],
    };

    const { queryByTestId } = render(Timeline, { props });

    //obtém o evento 1 ao invés do zero, pois o zero é o separador de data
    const elemento = queryByTestId('evento-timeline-1');

    expect(elemento).toBeNull();
  });
});
