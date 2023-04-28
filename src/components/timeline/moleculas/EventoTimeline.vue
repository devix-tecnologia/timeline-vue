<template>
  <div class="areaEvento">
    <article
      class="eventoTimeline"
      :class="[
        dadosEvento.valor.status,
        'criticidade-' + dadosEvento.valor.criticidade,
        eventoSelecionado,
      ]"
    >
      <!-- TODO: É preciso fazer uma função que adicione a classe "atual" no article.  -->

      <!-- TODO: Opção 1) pegar a previsto do evento, a previsto do evento seguinte e determine o intervalo e depois verifique se a hora_atual está nesse intervalo. Em caso positivo ela adiciona a classe "atual" no article. -->

      <!-- TODO: Opção 2) a cada x tempo uma função verifica qual previsto é menor que a hora_atual, pega a que está mais próxima e verifica se a previsto do evento seguinte é maior a a hora_atual. -->

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
  </div>
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
    selecionado: {},
  },
  components: {
    IconeStatus,
    IconeCategoria,
    HoraEvento,
    DescricaoEvento,
    Destaque,
  },
  setup(props) {
    // TODO: O que faz essas variaveis.
    // eslint-disable-next-line vue/no-setup-props-destructure
    // let eventoRecebido = ref(props.dadosEvento);
    // let evento = eventoRecebido.value as Evento;

    return {
      // TODO: Adiciona classe no objeto atual.
      eventoSelecionado: computed(() => ({
        "bg-selecionado": props.selecionado == true,
        "bg-padrao": props.selecionado == false,
      })),
      // evento,
    };
  },
});
</script>
<style scoped>
/* BOX DO EVENTO */

.areaEvento {
  display: table-row;
  min-height: 8rem;
  position: relative !important;
  width: 100%;
}

.eventoTimeline {
  position: relative;
  width: 100%;
  border-radius: 1rem;
}

.eventoTimeline:hover {
  background: #f9f9f9;
}

.bg-selecionado {
  background: var(--cor-selecao);
}

.bg-selecionado:hover {
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
