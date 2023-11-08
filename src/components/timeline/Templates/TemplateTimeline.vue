<template>
  <div class="pagina">
    <Timeline
      v-if="exibirTimeline"
      data-testid="timeline"
      :perfilTimeline="perfil"
      :eventosTimeline="eventosTimeline"
      @eventoTimelineClicked="exibirEvento"
    />
  </div>
  <!-- <div class="detalhe">
    <Evento
      v-if="!exibirTimeline"
      data-testid="editEventButton"
      :perfilEvento="perfil"
      :dadosEvento="eventoDetalhado"
    />
  </div> -->
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
      // console.log('eventos', eventos.value);
      // const e = {
      //   data: new Date('2023-04-26T19:00Z'),
      //   previsto: new Date('2023-04-26T19:00Z'),
      //   realizado: new Date('2023-04-26T19:30Z'),
      //   duracao: null,
      //   tolerancia: 10,
      //   titulo: 'Vacina da Covid',
      //   subtitulo: 'Posto de saúde do bairro',
      //   destaque: '',
      //   categoria: {
      //     nome: 'Vacina',
      //     icone: 'vaccines',
      //   },
      //   status: 'realizado',
      //   criticidade: 'media',
      //   atual: false,
      //   scroll: false,
      //   observacoes: [
      //     {
      //       mensagem: 'Atraso de 10 minutos',
      //       autor: { nome: 'Maria do Socorro' },
      //       criadaEm: new Date('2023-04-26T19:10Z'),
      //     },
      //   ],
      // } satisfies EventoDetalhado;

      // const { observacoes, ...eventoSimples } = e;
      // return [eventoSimples satisfies TipoEvento];

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
        titulo: 'Evento',
        subtitulo: 'Subtitulo',
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

    const exibirEvento = (evento: TipoEvento): void => {
      // exibirTimeline = false;
      alert('teste sidarta');
    };

    return {
      eventosTimeline,
      perfil,
      exibirTimeline,
      exibirEvento,
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
