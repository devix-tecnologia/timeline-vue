import { render, fireEvent } from '@testing-library/vue';
import EventTimeline from './EventoTimeline.vue';
import { Categoria } from '../type';

describe('EventTimeline.vue', () => {
  it('emite o evento "click" ao clicar no evento, se o clicacável for igual a true', async () => {
    const props = {
      status: 'realizado',
      criticidade: 'media',
      ehAtual: false,
      previsto: new Date('2023-04-26T19:00Z'),
      realizado: new Date('2023-04-26T19:30Z'),
      categoria: {
        nome: 'Vacina',
        icone: 'vaccines',
      } satisfies Categoria,
      titulo: 'Vacina da Covid',
      subtitulo: 'Posto de saúde do bairro',
      destaque: '',
      clicavel: true,
    };

    const { emitted, getByTestId } = render(EventTimeline, { props });
    const elemento = getByTestId('evento');
    expect(elemento).toBeTruthy();
    await fireEvent.click(elemento);

    // Verifica se o evento foi emitido
    expect(emitted().click).toBeTruthy();
  });

  it('NÃO emite o evento "click" ao clicar no evento, se o clicacável for igual a false', async () => {
    const props = {
      status: 'realizado',
      criticidade: 'media',
      ehAtual: false,
      previsto: new Date('2023-04-26T19:00Z'),
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

    const { emitted, getByTestId } = render(EventTimeline, { props });
    const elemento = getByTestId('evento');
    expect(elemento).toBeTruthy();
    await fireEvent.click(elemento);

    // Verifica se o evento NÃO foi emitido
    expect(emitted().click).toBeUndefined();
  });
});
