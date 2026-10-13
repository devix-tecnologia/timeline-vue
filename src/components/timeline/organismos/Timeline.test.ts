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

    it('troca separadores e eventos pelos da aparência agiliza, com as ações', () => {
      const { container, getAllByRole } = render(Timeline, {
        props: { aparencia: 'agiliza', eventosTimeline: gerarEventosConsultor(referencia) },
      });

      expect(container.querySelector('.timeline--agiliza')).toBeTruthy();
      expect(container.querySelectorAll('.separadorAgiliza')).toHaveLength(4);
      expect(container.querySelectorAll('.eventoAgiliza')).toHaveLength(12);
      expect(getAllByRole('button', { name: 'Concluir' }).length).toBeGreaterThan(0);
    });

    it('na aparência agiliza, emite "acaoClick" com o evento e a ação', async () => {
      const { getByRole, emitted } = render(Timeline, {
        props: { aparencia: 'agiliza', eventosTimeline: gerarEventosConsultor(referencia) },
      });

      await fireEvent.click(getByRole('button', { name: 'Reagendar' }));

      const [evento, acao] = emitted().acaoClick[0] as [Evento, { id: string }];
      expect(evento.titulo).toBe('Visita técnica');
      expect(acao.id).toBe('reagendar');
      expect(emitted().eventoClick).toBeUndefined();
    });

    it('nas aparências sem ações, não põe as ações como atributo no evento', () => {
      const { container } = render(Timeline, {
        props: { aparencia: 'cartoes', eventosTimeline: gerarEventosConsultor(referencia) },
      });

      expect(container.querySelector('[acoes]')).toBeNull();
    });
  });

  // task-003, item 7: reatividade à prop, sem reordenar a lista recebida e sem vazar o intervalo.
  describe('lista recebida', () => {
    const referencia = new Date(2026, 9, 7, 12, 0);

    it('acompanha a troca da prop', async () => {
      const eventos = gerarEventosConsultor(referencia);
      const { container, rerender } = render(Timeline, {
        props: { aparencia: 'cartoes', eventosTimeline: eventos },
      });
      expect(container.querySelectorAll('.eventoCartao')).toHaveLength(12);

      await rerender({ aparencia: 'cartoes', eventosTimeline: eventos.slice(0, 2) });

      expect(container.querySelectorAll('.eventoCartao')).toHaveLength(2);
    });

    it('não muda a ordem da lista de quem usa a Timeline', () => {
      const eventos = gerarEventosConsultor(referencia).reverse();
      const ordemRecebida = eventos.map((evento) => evento.titulo);

      render(Timeline, { props: { eventosTimeline: eventos } });

      expect(eventos.map((evento) => evento.titulo)).toEqual(ordemRecebida);
    });

    it('cria um intervalo ao montar e o limpa ao desmontar', () => {
      const criar = vi.spyOn(globalThis, 'setInterval');
      const limpar = vi.spyOn(globalThis, 'clearInterval');

      const { unmount } = render(Timeline, {
        props: { eventosTimeline: gerarEventosConsultor(referencia) },
      });
      expect(criar).toHaveBeenCalledTimes(1);

      unmount();
      expect(limpar).toHaveBeenCalledWith(criar.mock.results[0].value);

      criar.mockRestore();
      limpar.mockRestore();
    });
  });
});
