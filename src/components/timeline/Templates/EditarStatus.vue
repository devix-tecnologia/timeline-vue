<template>
  <EditarEvento :aoClicar="aoClicar" :salvarVisivel="salvarVisivel">
    <template #conteudo>
      <h2>Alterar o Status para:</h2>

      <div class="botoes">
        <label
          class="btn realizado"
          :class="{ selecionado: selecionado === 'realizado' }"
        >
          <IconeStatus class="icone" :status="`realizado`" /> realizado
          <input type="radio" value="realizado" v-model="selecionado" />
        </label>

        <label
          class="btn cancelado"
          :class="{ selecionado: selecionado === 'cancelado' }"
        >
          <IconeStatus class="icone" :status="`cancelado`" /> cancelado
          <input type="radio" value="cancelado" v-model="selecionado" />
        </label>

        <label
          class="btn adiado"
          :class="{ selecionado: selecionado === 'adiado' }"
        >
          <IconeStatus class="icone" :status="`adiado`" /> adiado
          <input type="radio" value="adiado" v-model="selecionado" />
        </label>
      </div>
    </template>

    <template #salvamento>
      <div v-if="selecionado === 'adiado'" class="nova-data">
        <h2>Nova Data:</h2>
        <p>componente de seleção de data deve entrar aqui.</p>
      </div>
    </template>
  </EditarEvento>
</template>

<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import "material-symbols/outlined.css";

import { AoClicarEvento } from "../type";
import { EventoDetalhado } from "../typeDetalhado";
import EditarEvento from "../organismos/EditarEvento.vue";
import IconeStatus from "../atomos/IconeStatus.vue";

export default defineComponent({
  props: {
    aoClicar: {
      required: false,
      type: Function as PropType<AoClicarEvento>,
    },
    salvarVisivel: {
      type: Boolean,
    },
  },
  components: { EditarEvento, IconeStatus },
  setup(props) {
    const selecionado = ref("");

    return {
      selecionado,
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

.botoes {
  padding-top: 2.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;
  text-align: center;
  width: 100%;
}

.btn {
  text-transform: capitalize;
  background: var(--cor-fundo);
  padding: 1.4rem;
  color: var(--cor-secundaria);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--cor-secundaria);
  border-radius: 10px;
  cursor: pointer;
  line-height: 0;
  font: var(--fonte);
  width: 100%;
  transition: all 0.1s ease-in;
  gap: 1rem;
}

.icone {
  font-size: 2.4rem;
  padding: 0.4rem 1.4rem 0 0 !important;
  display: inline-block;
  width: auto;
}

.btn.realizado {
  border: 1px solid var(--cor-sucesso);
  color: var(--cor-sucesso);
}

.btn.realizado.selecionado,
.btn.realizado:active,
.btn.preenchido.realizado,
.btn.realizado.selecionado .icone::before,
.btn.realizado:active .icone::before {
  background: var(--cor-sucesso);
  color: var(--cor-fundo);
}

.btn.cancelado {
  border: 1px solid var(--cor-importante);
  color: var(--cor-importante);
}
.btn.cancelado.selecionado,
.btn.cancelado:active,
.btn.preenchido.cancelado,
.btn.cancelado.selecionado .icone::before,
.btn.cancelado:active .icone::before {
  background: var(--cor-importante);
  color: var(--cor-fundo);
}

.btn.adiado {
  border: 1px solid var(--cor-apoio);
  color: var(--cor-apoio);
}
.btn.adiado.selecionado,
.btn.adiado:active,
.btn.preenchido.adiado,
.btn.adiado.selecionado .icone::before,
.btn.adiado:active .icone::before {
  background: var(--cor-apoio);
  color: var(--cor-fundo);
}

input[type="radio"] {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}
</style>
