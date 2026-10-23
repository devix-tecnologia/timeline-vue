import TemplateAgenda from './TemplateAgenda.vue';
import { Meta, StoryObj } from '@storybook/vue3-vite';
import { ref } from 'vue';
import {
  dadosPerfilMensageira,
  gerarEventosFilosofia,
  temaFilosofia,
} from '../organismos/Timeline.mock';
import { VISOES_AGENDA } from './TemplateAgenda.types';
import { FILTROS_AGENDA } from '../organismos/AgendaEventos.types';
import { AcaoEvento, Evento } from '../type';

export default {
  title: 'Devix/Templates/TemplateAgenda',
  component: TemplateAgenda,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `Tela de agenda de uma pessoa: marca e avatar no topo, título, nome e função, busca e a escolha entre **Agenda** e **Histórico**.

- **Agenda** (AgendaEventos): o dia escolhido, os filtros Todos, Pendentes e Concluídos, os pendentes que passaram do horário em destaque e os próximos eventos, com as ações de cada um.
- **Histórico**: os eventos já resolvidos (realizados, adiados e cancelados) na Timeline com a aparência \`filosofia\`.

A busca vale para as duas visões e procura no título, no destinatário, no destaque e na categoria, sem diferenciar acentos.

## 🎯 Quando usar
- Tela principal de quem acompanha os próprios compromissos, como a mensageira da FilosofiA
- Quando a pessoa precisa ver o que falta fazer e o que já aconteceu

## 🚫 Quando NÃO usar
- Para a linha do tempo de um paciente ou cliente, sem agenda (use TemplateTimeline)
- Para o detalhe de um evento (use EventoDetalhado)

## 📦 Estrutura
- A marca do produto entra pelo slot \`marca\`. A barra de navegação do aplicativo fica com quem usa o template.
- As cores vêm dos tokens (\`--cor-*\`). Nestas stories, os tokens de uma marca fictícia, a FilosofiA, são aplicados num contêiner, com os valores dos temas claro e escuro.
- O template emite \`eventoClick\`, \`acaoClick\` e \`diaClick\`; o que cada ação faz é de quem o usa.

## ♿ Acessibilidade
- Título da tela em \`<h1>\`, nome em \`<h2>\`, dias e seções em \`<h3>\` e eventos em \`<h4>\`
- As visões Agenda e Histórico, e os filtros, são botões com \`aria-pressed\`
- O campo de busca tem nome acessível próprio, além do placeholder
- O título de cada evento é um botão: o evento recebe foco e responde a Enter e Espaço`,
      },
    },
  },
  args: {
    perfil: dadosPerfilMensageira,
    titulo: 'Eventos',
    visaoInicial: 'agenda',
    filtroInicial: 'pendentes',
  },
  argTypes: {
    perfil: {
      description: 'Pessoa dona dos eventos: nome, função (`descricao`) e imagem opcional.',
      table: { type: { summary: 'Perfil' } },
    },
    eventos: {
      description: 'Eventos da pessoa, de qualquer dia.',
      table: { type: { summary: 'Evento[]' } },
    },
    titulo: {
      description: 'Título da tela.',
      table: { type: { summary: 'string' }, defaultValue: { summary: "'Eventos'" } },
    },
    dia: {
      description: 'Dia mostrado na agenda.',
      control: { type: 'date' },
      table: { type: { summary: 'Date' }, defaultValue: { summary: 'hoje' } },
    },
    visaoInicial: {
      description: 'Visão aberta ao montar.',
      control: { type: 'select' },
      options: VISOES_AGENDA,
      table: { type: { summary: 'VisaoAgenda' }, defaultValue: { summary: "'agenda'" } },
    },
    filtroInicial: {
      description: 'Filtro da agenda ao montar.',
      control: { type: 'select' },
      options: FILTROS_AGENDA,
      table: { type: { summary: 'FiltroAgenda' }, defaultValue: { summary: "'todos'" } },
    },
  },
  render: (args) => ({
    components: { TemplateAgenda },
    setup() {
      // Uma lista por story, porque a Timeline altera os eventos que recebe.
      const eventos = gerarEventosFilosofia();
      const dia = ref(new Date());
      const avancarDia = () => {
        const proximo = new Date(dia.value);
        proximo.setDate(proximo.getDate() + 1);
        dia.value = proximo;
      };
      const ultimaAcao = ref('');
      const registrarAcao = (evento: Evento, acao: AcaoEvento) => {
        ultimaAcao.value = `${acao.rotulo}: ${evento.titulo}`;
      };
      return { args, eventos, dia, avancarDia, ultimaAcao, registrarAcao, tema: temaFilosofia };
    },
    template: `
      <div :style="tema" style="max-width: 48rem; min-height: 100vh">
        <TemplateAgenda
          v-bind="args"
          :eventos="eventos"
          :dia="dia"
          @diaClick="avancarDia"
          @acaoClick="registrarAcao"
        >
          <template #marca>
            <span style="font-size: 2.6rem; font-weight: 800; letter-spacing: -0.03em">
              Filosofi<span style="color: var(--cor-primaria)">A</span>
            </span>
          </template>
        </TemplateAgenda>
        <p v-if="ultimaAcao" role="status" style="padding: 0 2rem 2rem; font-size: 1.4rem">
          Última ação: {{ ultimaAcao }}
        </p>
      </div>
    `,
  }),
} as Meta<typeof TemplateAgenda>;

type Story = StoryObj<typeof TemplateAgenda>;

export const Agenda: Story = {
  parameters: {
    docs: {
      description: {
        story: `A agenda de hoje da mensageira, filtrada nos pendentes: a carta de ontem para Descartes em destaque e os próximos eventos com "Ver detalhes" e "Concluir". A seta do dia avança um dia.`,
      },
    },
  },
};

export const Historico: Story = {
  name: 'Histórico',
  args: { visaoInicial: 'historico' },
  parameters: {
    docs: {
      description: {
        story:
          'O histórico da mensageira: os eventos já resolvidos, por dia, na Timeline com a aparência `filosofia`. O pombo-correio adiado para Diógenes oferece "Reagendar".',
      },
    },
  },
};
