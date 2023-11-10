<template>
  <div class="pagina">
    <topo v-if="!exibirTimeline" :titulo="perfil.nome" :escuro="false" 
     @emit-tela-anterior="voltarParaTelaAnterior"/>
    <Timeline
      v-if="exibirTimeline"
      data-testid="timeline"
      :perfilTimeline="perfil"
      :eventosTimeline="eventosTimeline"
      @eventoTimelineClicked="selecionarEvento"
    />
    <Evento
      v-if="!exibirTimeline"
      data-testid="editEventButton"
      :perfilEvento="perfil"
      :dadosEvento="eventoDetalhado"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRef, reactive, computed } from 'vue';
import 'material-symbols/outlined.css';

import { Perfil } from '../type';
import { EventoDetalhado } from '../typeDetalhado';
import { Evento as TipoEvento } from '../type';

import Topo from '../moleculas/Topo.vue';
import Evento from '../organismos/EventoDetalhado.vue';
import Timeline from '../organismos/Timeline.vue';

export default defineComponent({
  props: {
    perfil: {
      required: true,
      type: Object as PropType<Perfil>,
    },
    eventos: {
      required: true,
      type: Array as PropType<EventoDetalhado[]>,
    },
  },

  components: { Topo, Evento, Timeline },

  setup(props, { emit }) {
    const eventos = toRef(props, 'eventos');
    const perfil = toRef(props, 'perfil');

    let exibirTimeline = toRef<boolean>(true);
    let eventoAtual = toRef<TipoEvento | null>(null);

    const eventosTimeline = computed((): TipoEvento[] => {
      return eventos.value.map((evento) => {
        //desestruturando o eventoDetalhado para transforma-lo em um evento simples
        const {
          observacoes,
          aoAlterarEvento,
          aoAdicionarObservacao,
          aoFechar,
          ...eventoSimples
        } = evento;
        return eventoSimples satisfies TipoEvento as TipoEvento;
      }) satisfies TipoEvento[];
    });

    const eventoDetalhado = computed(() => {
      if (!eventoAtual.value) {
        return undefined;
      }

      const e: EventoDetalhado = {
        ...eventoAtual.value,
        observacoes: [
          {
            mensagem: 'teste',
            autor: { nome: 'José da Silva' },
            criadaEm: new Date(),
          },
        ],
      } satisfies EventoDetalhado;
      return e;
    });

    const selecionarEvento = (evento: TipoEvento): void => {
      exibirTimeline.value = false;
      eventoAtual.value = evento;
    };

    const voltarParaTelaAnterior = (): void => {
      exibirTimeline.value = !exibirTimeline.value;
    }

    return {
      eventosTimeline,
      perfil,
      exibirTimeline,
      selecionarEvento,
      voltarParaTelaAnterior,
      eventoDetalhado,
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
