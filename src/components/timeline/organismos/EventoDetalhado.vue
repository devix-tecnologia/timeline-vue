<template>
  <div class="evento">
    <transition name="fadeBaixo" mode="out-in" appear>
      <CabecalhoEventoDetalhado
        :perfil="perfilEvento"
        :evento="dadosEvento"
        :aoClicar="dadosEvento.aoClicar"
      />
    </transition>

    <transition name="fadeBaixo" mode="out-in" appear>
      <section class="descricao">
        <slot name="descricao">
          {{ dadosEvento.subtitulo }}
        </slot>
      </section>
    </transition>

    <transition name="fadeBaixo" mode="out-in" appear>
      <Observacoes
        :observacoes="dadosEvento.observacoes"
        :tituloBotao="`Inserir observação`"
        :aoClicar="dadosEvento.aoClicar"
        @on-observacoes-add-clicked="aoAdicionarObservacao"
      />
    </transition>

    <transition name="fadeBaixo" mode="out-in" appear>
      <StatusEvento
        :aparencia="`preenchido`"
        :aoClicar="dadosEvento.aoClicar"
        :status="dadosEvento.status"
        @on-status-evento-edit-clicked="aoEditarEvento"
      />
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from 'vue';
import 'material-symbols/outlined.css';

import { Perfil } from '../type';
import { EventoDetalhado } from '../typeDetalhado';
import CabecalhoEventoDetalhado from '../moleculas/CabecalhoEventoDetalhado.vue';
import Observacoes from '../moleculas/Observacoes.vue';
import StatusEvento from '../moleculas/StatusEvento.vue';

export default defineComponent({
  props: {
    perfilEvento: {
      required: true,
      type: Object as PropType<Perfil>,
    },
    dadosEvento: {
      required: false,
      type: Object as PropType<EventoDetalhado>,
    },
  },
  components: { CabecalhoEventoDetalhado, Observacoes, StatusEvento },

  emits: {
    onEventoDetalhadoStatusEditClicked: () => true,
    onEventoDetalhadoObservacoesAddClicked: () => true,
  },

  setup(props, { emit }) {
    const aoEditarEvento = () => {
      emit('onEventoDetalhadoStatusEditClicked');
    };

    const aoAdicionarObservacao = () => {
      emit('onEventoDetalhadoObservacoesAddClicked');
    };

    return {
      aoEditarEvento,
      aoAdicionarObservacao,
    };
  },
});
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
