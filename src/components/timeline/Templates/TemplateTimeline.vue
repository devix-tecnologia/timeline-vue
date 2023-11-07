<template>
  <div class="pagina">
    <Timeline
    v-if="exibirTimeline"
      data-testid="selectEventButton"
      :perfilTimeline="perfil"
      :eventosTimeline="dadosTimeline"
      @eventoTimelineClicked="exibirEventoDetalhado"
    />
    <Evento
      v-else
      data-testid="editEventButton"
      :perfilEvento="perfil"
      :dadosEvento="dadosEvento"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRef } from 'vue';
import 'material-symbols/outlined.css';

import { Perfil } from '../type';
import { EventoDetalhado } from '../typeDetalhado';
import { Evento as TipoEvento } from '../type';

import Topo from '../moleculas/Topo.vue';
import Evento from '../organismos/EventoDetalhado.vue';
import Timeline from '../organismos/Timeline.vue';

type TipoEventoTimeline =
  | { tipo: 'dia'; valor: Date; key: number }
  | { tipo: 'evento'; valor: TipoEvento; key: number }
  | { tipo: 'eventos'; valor: TipoEvento[]; key: number };

export default defineComponent({
  props: {
    perfil: {
      required: true,
      type: Object as PropType<Perfil>,
    },
    eventos: {
      required: true,
      type: Object as PropType<TipoEvento[]>,
    },
  },

  components: { Topo, Evento, Timeline },

  setup(props, ctx) {

    //verifica qual evento está mais próximo da hora atual e coloca ele numa nova lista na primeira posição
    const filtraEventoAtual = (eventos: TipoEvento[]) => {
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
            listaEventos.push(e);
          }
        }
        return listaEventos;
      } else {
        return [];
      }
    };

    const _eventos = toRef(props, 'eventos');


    let exibirTimeline: Boolean = true;
    let dadosEvento = filtraEventoAtual(_eventos.value) as unknown as EventoDetalhado;
    let dadosTimeline = _eventos.value as unknown as TipoEvento;

    const exibirEventoDetalhado = (evento: TipoEventoTimeline) => {
      exibirTimeline = false;
      dadosEvento = evento.valor as unknown as EventoDetalhado;
    };


    return {
      dadosEvento,
      dadosTimeline,
      exibirTimeline,
      exibirEventoDetalhado,
      props,
    };
  },
});
</script>

<style>
::-webkit-scrollbar {
  display: none;
}
.pagina {
  width: 100%;
  height: 100%;
}
.evento {
  padding: 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
}

.descricao {
  font-size: 1.4rem;
}
</style>
