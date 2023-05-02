<template>
  <article
    class="eventoTimeline"
    :class="[
      dadosEvento.valor.status,
      'criticidade-' + dadosEvento.valor.criticidade,
      eventoSelecionado,
    ]"
  >
    <IconeStatus :status="dadosEvento.valor.status" />
    <HoraEvento
      :horaPrevista="dadosEvento.valor.previsto"
      :horaRealizada="dadosEvento.valor.realizado"
    />
    <IconeCategoria
      :iconeCategoria="dadosEvento.valor.categoria.icone"
      :categoria="dadosEvento.valor.categoria.nome"
    />
    <DescricaoEvento
      :titulo="dadosEvento.valor.titulo"
      :subtitulo="dadosEvento.valor.subtitulo"
    />
    <Destaque :destaque="dadosEvento.valor.destaque" />
  </article>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import IconeCategoria from "../atomos/IconeCategoria.vue";
import IconeStatus from "../atomos/IconeStatus.vue";
import DescricaoEvento from "./DescricaoEvento.vue";
import HoraEvento from "./HoraEvento.vue";
import Destaque from "../atomos/Destaque.vue";

export default defineComponent({
  props: {
    dadosEvento: {
      required: true,
      type: Object,
    },
  },
  components: {
    IconeStatus,
    IconeCategoria,
    HoraEvento,
    DescricaoEvento,
    Destaque,
  },
  setup(props) {
    return {
      eventoSelecionado: computed(() => ({
        atual: props.dadosEvento.atual == true,
        padrao: props.dadosEvento.atual == false,
      })),
    };
  },
});
</script>
<style scoped>
/* BOX DO EVENTO */

.eventoTimeline {
  position: relative;
  width: 100%;
  border-radius: 1rem;
}

.eventoTimeline:hover {
  background: #f9f9f9;
}

.atual {
  background: var(--cor-selecao);
}

.atual:hover {
  background: var(--cor-selecao);
}

/* box com as informações */

.eventoTimeline:before {
  content: "";
  background: var(--cor-linha);
  display: block;
  position: absolute;
  width: 2px;
  top: 0;
  height: 1.5rem;
  left: 11.7rem;
}

.eventoTimeline:after {
  content: "";
  background: var(--cor-linha);
  display: block;
  position: absolute;
  width: 2px;
  top: 5.1rem;
  bottom: 0;
  left: 11.7rem;
}
</style>
