import { render, fireEvent } from '@testing-library/vue';
import AdiantarHorario from './AdiantarHorario.vue';
import { dadosEventoDetalhado } from '../EventoDetalhado.mock';

describe('AdiantarHorario.vue', () => {
  it('renderiza componente', async () => {
    const props = {
      salvarVisivel: true,
      evento: dadosEventoDetalhado[0],
    };

    const { getByTestId } = render(AdiantarHorario, { props });
    const buttonValue = getByTestId('adiantar-horario');
    expect(buttonValue).toBeTruthy();
  });

  it('emite "salvarClick" quando o botao-salvar é clicado', async () => {
    const props = {
      salvarVisivel: true,
      evento: dadosEventoDetalhado[0],
    };

    const { emitted, getByTestId } = render(AdiantarHorario, { props });
    const elemento = getByTestId('botao-adiantar-horario');
    expect(elemento).toBeTruthy();
    await fireEvent.click(elemento);

    // Verifica se o evento foi emitido
    expect(emitted().click).toBeTruthy();
  });

  // it('adianta o horario em 15 minutos ao clicar em adiantar 15 minutos', async () => {
  //   const props = {
  //     salvarVisivel: true,
  //     evento: dadosEventoDetalhado[0],
  //   };
  //   props.evento.previstoPara = new Date('2023-11-29T14:15:00.000Z');

  //   const { getByTestId, findByTestId } = render(AdiantarHorario, { props });

  //   const elementoHorario = findByTestId('horario');
  //   expect(elementoHorario).toBeTruthy();
  //   await waitFor(() => {
  //     const value = elementoHorario.;
  //     expect(elementoHorario.value).toBe('29/11/2023 - 14:15');
  //   });

  //   const botaoAdiantar15Minutos = getByTestId('adiantar-15-minutos');
  //   expect(botaoAdiantar15Minutos).toBeTruthy();
  //   await fireEvent.click(botaoAdiantar15Minutos);

  //   // expect(elementoHorario.textContent).toBe('29/11/2023 14:30');
  // });

  // it.skip('adianta o horário em 15 minutos ao clicar no botão', async () => {
  //   const props = {
  //     salvarVisivel: true,
  //     dadosEvento: dadosEventoDetalhado[0]
  //   };

  //   const isHTMLInputElement = (elem: HTMLElement): elem is HTMLInputElement => {
  //     return elem instanceof HTMLInputElement;
  //   };

  //   const { getByTestId } = render(AdiantarHorario, { props });

  //   const botao = getByTestId('adiantar-15-minutos');
  //   expect(botao).toBeTruthy();
  //   await fireEvent.click(botao);

  //   const elementoHorario = getByTestId('horario');
  //   if (isHTMLInputElement(elementoHorario)) {
  //     console.log(elementoHorario.value);
  //     expect(elementoHorario.value).toBe('29/11/2023 - 14:15');
  //   }
  // });
});
