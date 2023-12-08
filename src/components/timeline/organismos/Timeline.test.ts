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
    // Verifica o payload do evento
    const payload = emitted().eventoClick[0];
    expect(Array.isArray(payload)).toBe(true);

    if (!Array.isArray(payload)) {
      new Error('Payload não é um array');
      return;
    }

    expect(payload).toHaveLength(2);
    expectTypeOf(payload[0]).toMatchTypeOf<Evento>();
    expect(payload[0]).toEqual(props.eventosTimeline[0]);
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
});
