<template>
  <EditarEvento
    data-testid="editar-status"
    :salvarVisivel="salvarVisivel"
    @cancelarClick="aoCancelar"
    @salvarClick="aoSalvar(selecionado, $event)"
  >
    <template #conteudo>
      <h2>Alterar o Status para:</h2>

      <BotaoStatus
        :aparencia="getAparencia('realizado')"
        :status="`realizado`"
        data-testid="botao-status-realizado"
        @click="atualizarSelecionado('realizado')"
      />
      <BotaoStatus
        :aparencia="getAparencia('cancelado')"
        :status="`cancelado`"
        data-testid="botao-status-cancelado"
        @click="atualizarSelecionado('cancelado')"
      />
      <BotaoStatus
        :aparencia="getAparencia('adiado')"
        :status="`adiado`"
        data-testid="botao-status-adiado"
        @click="atualizarSelecionado('adiado')"
      />
    </template>

    <template #salvamento>
      <transition name="fadeBaixo" mode="out-in" appear>
        <div v-if="selecionado === 'adiado'" class="nova-data">
          <h2>Nova Data:</h2>
          <p>componente de seleção de data deve entrar aqui.</p>
        </div>
      </transition>
    </template>
  </EditarEvento>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, reactive, computed } from 'vue';
import 'material-symbols/outlined.css';

import { Status } from '../type';
import { EventoDetalhado } from '../typeDetalhado';
import EditarEvento from '../organismos/EditarEvento.vue';
import IconeStatus from '../atomos/IconeStatus.vue';

import BotaoStatus from '../moleculas/BotaoStatus.vue';

export default defineComponent({
  components: { EditarEvento, IconeStatus, BotaoStatus },
  props: {
    salvarVisivel: {
      type: Boolean,
    },
    evento: {
      required: true,
      type: Object as PropType<EventoDetalhado>,
    },
  },

  emits: {
    salvarClick: (status: Status, mouseEvent: MouseEvent) => true,
    cancelarClick: (mouseEvent: MouseEvent) => true,
  },

  setup(props, { emit }) {
    const aoSalvar = (status: Status, mouseEvent: MouseEvent) => {
      emit('salvarClick', status, mouseEvent);
    };

    const aoCancelar = (mouseEvent: MouseEvent) => {
      emit('cancelarClick', mouseEvent);
    };

    const selecionado = ref(props.evento.status);

    function atualizarSelecionado(novoValor: Status) {
      selecionado.value = novoValor;
    }

    const getAparencia = computed(() => {
      return (botao: string) => {
        return selecionado.value === botao ? 'preenchido' : 'outline';
      };
    });

    return {
      aoSalvar,
      aoCancelar,
      atualizarSelecionado,
      selecionado,
      getAparencia,
    };
  },
});
</script>

<style>
.area-conteudo {
  padding: 1.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;
  text-align: center;
}

.nova-data {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;
  text-align: center;
  width: 100%;
  color: var(--cor-acao);
}
</style>
