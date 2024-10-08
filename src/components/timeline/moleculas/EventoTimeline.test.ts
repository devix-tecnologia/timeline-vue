import { render, fireEvent } from '@testing-library/vue';
import EventoTimeline from './EventoTimeline.vue';
import { Categoria, Criticidade, Status } from '../type';

describe('EventoTimeline.vue', () => {
  it('emite o evento "click" ao clicar no evento, se o clicacável for igual a true', async () => {
    const props = {
      status: 'realizado' as Status,
      criticidade: 'media' as Criticidade,
      ehAtual: false,
      previstoPara: new Date('2023-04-26T19:00Z'),
      realizado: new Date('2023-04-26T19:30Z'),
      categoria: {
        nome: 'Vacina',
        icone: 'vaccines',
      } satisfies Categoria,
      titulo: 'Vacina da Covid',
      subtitulo: 'Posto de saúde do bairro',
      destaque: '',
      clicavel: true,
    } as const;

    const { emitted, getByTestId } = render(EventoTimeline, { props });
    const elemento = getByTestId('evento');
    expect(elemento).toBeTruthy();
    await fireEvent.click(elemento);

    // Verifica se o evento foi emitido
    expect(emitted().click).toBeTruthy();
  });

  it('clicacavel = false, então NÃO emite', async () => {
    const props = {
      status: 'realizado' as Status,
      criticidade: 'media' as Criticidade,
      ehAtual: false,
      previstoPara: new Date('2023-04-26T19:00Z'),
      realizado: new Date('2023-04-26T19:30Z'),
      categoria: {
        nome: 'Vacina',
        icone: 'vaccines',
      } satisfies Categoria,
      titulo: 'Vacina da Covid',
      subtitulo: 'Posto de saúde do bairro',
      destaque: '',
      clicavel: false,
    };

    const { emitted, getByTestId } = render(EventoTimeline, { props });
    const elemento = getByTestId('evento');
    expect(elemento).toBeTruthy();
    await fireEvent.click(elemento);

    // Verifica se o evento NÃO foi emitido
    expect(emitted().click).toBeUndefined();
  });
  
});
