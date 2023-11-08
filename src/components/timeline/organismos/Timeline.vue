<template>
  <div class="areaTimeline">
    <PerfilTimeline
      v-if="perfilTimeline"
      :nomePerfil="perfilTimeline.nome"
      :imagemPerfil="perfilTimeline.imagem"
      :iconePerfil="perfilTimeline.icone"
      data-testid="perfilTimeline"
    />

    <section class="timeline">
      <!-- SEPARADOR -->
      <div v-for="evento in eventosPorTipo" :key="evento.key">
        <SeparadorPeriodo
          v-if="evento.tipo === 'dia'"
          :dataSeparador="evento.valor"
        />
        <!--loop-->
        <EventoTimeline
          v-if="evento.tipo === 'evento'"
          :status="evento.valor.status"
          :criticidade="evento.valor.criticidade"
          :previsto="evento.valor.previsto"
          :realizado="evento.valor.realizado"
          :categoria="evento.valor.categoria"
          :titulo="evento.valor.titulo"
          :subtitulo="evento.valor.subtitulo"
          :destaque="evento.valor.destaque"
          :ehAtual="evento.valor.atual"
          @click="handleEventoClick(evento)"
          :aoClicar="
            () => {
              if (evento && evento.valor && evento.valor.aoClicar) {
                evento.valor.aoClicar(evento.valor);
              }
            }
          "
          data-testid="eventoTimeline"
        />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, reactive } from 'vue';
import EventoTimeline from '../moleculas/EventoTimeline.vue';
import SeparadorPeriodo from '../moleculas/SeparadorPeriodo.vue';
import PerfilTimeline from '../moleculas/PerfilTimeline.vue';
import { AoClicarEvento, Evento } from '../type';
import { EventoDetalhado } from '../typeDetalhado';
import 'material-symbols/outlined.css';

type TipoEventoTimeline =
  | { tipo: 'dia'; valor: Date; key: number }
  | { tipo: 'evento'; valor: EventoDetalhado; key: number }
  | { tipo: 'eventos'; valor: Evento[]; key: number };

export default defineComponent({
  props: {
    perfilTimeline: {
      required: false,
      type: Object,
    },
    eventosTimeline: {
      required: true,
      type: Object,
    },
  },
  components: {
    PerfilTimeline,
    SeparadorPeriodo,
    EventoTimeline,
  },

  emits: {
    eventoTimelineClicked: (evento: TipoEventoTimeline) => true,
  },

  setup(props, ctx) {
    const handleEventoClick = (evento: TipoEventoTimeline) => {
      dadosEventosTimeline.forEach((evento) => {
        evento.atual = false;
      });

      ctx.emit('eventoTimelineClicked', evento);
    };

    const dadosEventosTimeline: Evento[] = reactive(
      props.eventosTimeline as Array<Evento>
    );
    let dadosEventosTimelineClone: Evento[] = reactive(dadosEventosTimeline);

    function carregarListaEventos() {
      dadosEventosTimelineClone = dadosEventosTimeline;
      const resultado: Evento[] = filtraEventoAtual(dadosEventosTimelineClone);
      dadosEventosTimelineClone.map((resp) => {
        if (resultado[0] === resp) {
          resp.atual = true;
          resp.scroll = true;
          void scrollParaItemAtual();
        } else {
          resp.atual = false;
          resp.scroll = false;
        }
        return {
          evento: resp,
        };
      });
    }

    const atualizarEventoAtual = () => {
      setInterval(carregarListaEventos, 60000);
    };

    const verifica_mesmo_dia = (a: Date, b: Date) => {
      const mesmo_dia = a.getDay() === b.getDay();
      const mesmo_mes = a.getMonth() === b.getMonth();
      const mesmo_ano = a.getFullYear() === b.getFullYear();
      return mesmo_dia && mesmo_mes && mesmo_ano;
    };

    //verifica qual evento está mais próximo da hora atual e coloca ele numa nova lista na primeira posição
    const filtraEventoAtual = (eventos: Evento[]) => {
      if (eventos) {
        const agora = Date.now();
        let minDiff: number | null = null;
        let listaEventos = [];
        for (const e of eventos) {
          const t = e.data.getTime();
          if (e.status === 'planejado' || e.status === 'atrasado') {
            const diff: number = Math.abs(agora - e.data.getTime());
            if (minDiff === null || (diff < minDiff && t <= agora)) {
              minDiff = diff;
              listaEventos.length = 0;
            } else if (diff > minDiff) {
              continue;
            }
            listaEventos.push({ ...e });
          }
        }
        return listaEventos;
      } else {
        return [];
      }
    };

    // lista de eventos por tipo
    const eventosTimeline = computed(() => {
      void atualizarEventoAtual();

      const eventosOrdenados = dadosEventosTimelineClone.sort(
        (a: Evento, b: Evento) => {
          return a.data.getTime() - b.data.getTime();
        }
      );

      if (eventosOrdenados) {
        let resultado: Array<TipoEventoTimeline> = [];
        let dataAtual: Date | null = null;
        let idx = 0;
        let statusEvento;

        for (const evento of eventosOrdenados) {
          const agora = new Date();
          const dataEvento = evento.data;
          statusEvento = evento.status;
          const toleranciaEvento = evento.tolerancia * 60 * 1000;

          //altera status para atrasado
          if (
            statusEvento === 'planejado' &&
            dataEvento.getTime() + toleranciaEvento < agora.getTime()
          ) {
            evento.status = 'atrasado';
          }
          if (!dataAtual || !verifica_mesmo_dia(dataAtual, dataEvento)) {
            dataAtual = dataEvento;
            resultado.push({
              tipo: 'dia',
              valor: evento.data,
              key: ++idx,
            });
          }
          resultado.push({
            tipo: 'evento',
            valor: { ...evento } as EventoDetalhado,
            key: ++idx,
          });
        }
        return resultado;
      } else {
        return [];
      }
    });

    const scrollParaItemAtual = () => {
      const itemAtual = document.querySelector('.atual');
      if (itemAtual) {
        itemAtual?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
    };

    carregarListaEventos();
    return {
      eventosPorTipo: eventosTimeline,
      scrollParaItemAtual,
      handleEventoClick,
      // clicar,
    };
  },
  mounted() {
    // Aguardando a renderização para fazer scroll
    this.scrollParaItemAtual();
  },
});
</script>

<style>
/* TIMELINE */

.areaTimeline {
  background-color: var(--cor-fundo);
  position: relative;
}

.areaEvento {
  display: table-row;
  min-height: 8rem;
  position: relative !important;
  width: 100%;
}

.timeline {
  display: table;
  width: 100%;
  position: relative;
}
</style>
