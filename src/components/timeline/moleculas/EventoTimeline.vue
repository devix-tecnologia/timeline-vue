<template>
  <article
    class="eventoTimeline"
    :class="[status, 'criticidade-' + criticidade, eventoSelecionado]"
  >
    <IconeStatus :status="status" />
    <HoraEvento :horaPrevista="previsto" :horaRealizada="realizado" />
    <IconeCategoria
      :iconeCategoria="categoria.icone"
      :categoria="categoria.nome"
    />
    <DescricaoEvento :titulo="titulo" :subtitulo="subtitulo" />
    <Destaque :destaque="destaque" />
  </article>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import IconeCategoria from "../atomos/IconeCategoria.vue";
import IconeStatus from "../atomos/IconeStatus.vue";
import DescricaoEvento from "./DescricaoEvento.vue";
import HoraEvento from "./HoraEvento.vue";
import Destaque from "../atomos/Destaque.vue";
// import { Evento, Categoria } from "../type";

interface Categoria {
  nome: string;
  icone: string;
}

export default defineComponent({
  props: {
    status: {
      required: true,
      type: String,
    },
    criticidade: {
      required: true,
      type: String,
    },
    ehAtual: {
      required: true,
      type: Boolean,
    },
    previsto: {
      required: true,
      type: Date,
    },
    realizado: {
      required: true,
      type: Date || null,
    },
    categoria: {
      required: true,
      type: Object as () => Categoria,
    },
    titulo: {
      required: true,
      type: String,
    },
    subtitulo: {
      required: true,
      type: String,
    },
    destaque: {
      required: true,
      type: String,
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
        atual: props.ehAtual,
        padrao: props.ehAtual,
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

.eventoTimeline.atrasado:before {
  background: var(--cor-alerta);
}

.eventoTimeline.atrasado:after {
  background: var(--cor-alerta);
}

.eventoTimeline.atrasado:before {
  background: var(--cor-alerta);
}

.eventoTimeline.atrasado:after {
  background: var(--cor-alerta);
}
</style>
