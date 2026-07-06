import HoraEvento from './HoraEvento.vue';
import { Meta } from '@storybook/vue3-vite';

export default {
  title: 'Devix/Moleculas/HoraEvento',
  component: HoraEvento,
  parameters: {
    docs: {
      description: {
        component: `Exibe o horário de um evento na timeline. Mostra a hora prevista e, opcionalmente, a hora realizada com formatação riscada.

## 🎯 Quando usar
- Dentro do card EventoTimeline para exibir os horários do evento
- Sempre que for necessário comparar horário previsto vs realizado

## 🚫 Quando NÃO usar
- Para exibir apenas data sem horário — use o componente BoxData
- Quando não houver horário previsto (campo obrigatório)

## ♿ Acessibilidade
- O horário é exibido como texto puro, sem depender de cor para transmitir informação
- Quando realizado, o horário previsto recebe aparência "riscada" (text-decoration: line-through)`,
      },
    },
  },
  argTypes: {
    horaPrevista: {
      description: 'Horário previsto para o evento. Obrigatório.',
      table: { type: { summary: 'Date' } },
    },
    horaRealizada: {
      description:
        'Horário real de realização do evento. Quando presente, o horário previsto é exibido como riscado.',
      table: { type: { summary: 'Date' } },
    },
  },
} as Meta<typeof HoraEvento>;

export const Padrao = {
  args: { horaPrevista: new Date('2023-05-03T15:00Z') },
};
Padrao.parameters = {
  docs: {
    description: {
      story: 'Horário previsto padrão. Exibe apenas a hora planejada sem indicação de atraso.',
    },
  },
};

export const Atrasado = {
  args: {
    horaPrevista: new Date('2023-05-03T15:00Z'),
    horaRealizada: new Date('2023-05-03T16:00Z'),
  },
};
Atrasado.parameters = {
  docs: {
    description: {
      story:
        'Horário com atraso: exibe a hora realizada e a prevista riscada, indicando que o evento ocorreu 1h após o previsto.',
    },
  },
};
