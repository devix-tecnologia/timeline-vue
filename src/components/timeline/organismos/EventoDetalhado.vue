<template>
  <div class="evento" data-testid="evento-detalhado">
    <transition name="fadeBaixo" mode="out-in" appear>
      <CabecalhoEventoDetalhado :perfil="perfil" :evento="evento" />
    </transition>

    <transition name="fadeBaixo" mode="out-in" appear>
      <section class="descricao">
        <slot name="descricao">
          {{ evento.subtitulo }}
        </slot>
      </section>
    </transition>

    <transition name="fadeBaixo" mode="out-in" appear>
      <Observacoes
        :observacoes="evento.observacoes"
        :tituloBotao="`Inserir observação`"
        @adicionarClick="handleAdicionarObservacaoClick"
      />
    </transition>

    <transition name="fadeBaixo" mode="out-in" appear>
      <StatusEvento
        data-testid="status-evento"
        :aparencia="`preenchido`"
        :status="evento.status"
        @click="handleEditarClick"
      />
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import type { DefineComponent } from 'vue';
import 'material-symbols/outlined.css';

import { Perfil } from '../type';
import { EventoDetalhado } from '../typeDetalhado';
import CabecalhoEventoDetalhado from '../moleculas/CabecalhoEventoDetalhado.vue';
import Observacoes from '../moleculas/Observacoes.vue';
import StatusEvento from '../moleculas/StatusEvento.vue';

export default defineComponent({
  name: 'EventoDetalhado',
  components: { CabecalhoEventoDetalhado, Observacoes, StatusEvento },
  props: {
    perfil: {
      required: false,
      type: Object as PropType<Perfil>,
    },
    evento: {
      required: true,
      type: Object as PropType<EventoDetalhado>,
    },
  },

  emits: {
    statusEditarClick: (_mouseEvent: MouseEvent) => true,
    observacaoAdicionarClick: (_mouseEvent: MouseEvent) => true,
  },

  setup(props, { emit }) {
    const handleEditarClick = (_mouseEvent: MouseEvent) => {
      emit('statusEditarClick', _mouseEvent);
    };

    const handleAdicionarObservacaoClick = (_mouseEvent: MouseEvent) => {
      emit('observacaoAdicionarClick', _mouseEvent);
    };

    return {
      handleEditarClick,
      handleAdicionarObservacaoClick,
    };
  },
}) as DefineComponent<Record<string, unknown>, Record<string, unknown>, any>;
</script>

<style>
.evento {
  padding: 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
}

.descricao {
  font-size: 1.4rem;
  color: var(--cor-texto);
}
</style>
