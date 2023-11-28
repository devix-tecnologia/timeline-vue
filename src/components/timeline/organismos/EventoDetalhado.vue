<template>
  <div class="evento">
    <transition name="fadeBaixo" mode="out-in" appear>
      <CabecalhoEventoDetalhado
        :perfil="perfil"
        :evento="evento"
      />
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
        @adicionarClick="aoAdicionarObservacao"
      />
    </transition>

    <transition name="fadeBaixo" mode="out-in" appear>
      <StatusEvento
        :aparencia="`preenchido`"
        :status="evento.status"
        @editarClick="aoEditarEvento"
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
    perfil: {
      required: true,
      type: Object as PropType<Perfil>,
    },
    evento: {
      required: true,
      type: Object as PropType<EventoDetalhado>,
    },
  },
  components: { CabecalhoEventoDetalhado, Observacoes, StatusEvento },

  emits: {
    statusEditClick: () => true,
    observacaoAddClick: () => true,
  },

  setup(props, { emit }) {
    const aoEditarEvento = () => {
      emit('statusEditClick');
    };

    const aoAdicionarObservacao = () => {
      emit('observacaoAddClick');
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
