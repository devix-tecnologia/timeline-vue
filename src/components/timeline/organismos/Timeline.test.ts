import { render, fireEvent } from '@testing-library/vue';
import Timeline from './Timeline.vue';
import { dadosPerfil, dadosPerfilConsultor, gerarEventosConsultor } from './Timeline.mock';
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

  describe('aparencia', () => {
    const referencia = new Date(2026, 9, 7, 12, 0);

    it('usa a aparência padrao quando a prop não é informada', () => {
      const { container } = render(Timeline, {
        props: { eventosTimeline: gerarEventosConsultor(referencia) },
      });

      expect(container.querySelector('.timeline--padrao')).toBeTruthy();
      expect(container.querySelectorAll('.separadorPeriodo')).toHaveLength(4);
      expect(container.querySelectorAll('.eventoTimeline')).toHaveLength(12);
      expect(container.querySelector('.eventoCartao')).toBeNull();
    });

    it('troca separadores e eventos pelos cartões na aparência cartoes', () => {
      const { container } = render(Timeline, {
        props: {
          aparencia: 'cartoes',
          perfilTimeline: dadosPerfilConsultor,
          eventosTimeline: gerarEventosConsultor(referencia),
        },
      });

      expect(container.querySelector('.timeline--cartoes')).toBeTruthy();
      expect(container.querySelectorAll('.separadorCartao')).toHaveLength(4);
      expect(container.querySelectorAll('.eventoCartao')).toHaveLength(12);
      expect(container.querySelector('.eventoTimeline')).toBeNull();
      expect(container.querySelector('.separadorPeriodo')).toBeNull();
    });

    it('na aparência cartoes, emite "eventoClick" com o evento clicado', async () => {
      const eventos = gerarEventosConsultor(referencia);
      const { emitted, getByRole } = render(Timeline, {
        props: { aparencia: 'cartoes', eventosTimeline: eventos },
      });

      await fireEvent.click(getByRole('button', { name: 'Assinatura do contrato' }));

      const eventoClick = emitted().eventoClick as [Evento, MouseEvent][];
      expect(eventoClick).toHaveLength(1);
      expect(eventoClick[0][0].titulo).toBe('Assinatura do contrato');
    });

    it('na aparência cartoes, mostra o evento não clicável sem botão', () => {
      const eventos = gerarEventosConsultor(referencia).map((evento) => ({
        ...evento,
        clicavel: false,
      }));
      const { queryAllByRole } = render(Timeline, {
        props: { aparencia: 'cartoes', eventosTimeline: eventos },
      });

      expect(queryAllByRole('button')).toHaveLength(0);
    });
  });
});
