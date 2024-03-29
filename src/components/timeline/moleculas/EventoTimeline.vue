<template>
  <article
    data-testid="evento"
    class="eventoTimeline"
    :class="[status, 'criticidade-' + criticidade, eventoSelecionado, clicavel]"
    @click="handleClick"
  >
    <IconeStatus :status="status" />
    <HoraEvento :horaPrevista="previstoPara" :horaRealizada="realizadoEm" />
    <IconeCategoria :iconeCategoria="categoria.icone" :categoria="categoria.nome" />
    <DescricaoEvento :titulo="titulo" :subtitulo="subtitulo" />
    <Destaque :texto="textoDestaque" />
  </article>
</template>
<script lang="ts">
import { defineComponent, computed, PropType } from 'vue';
import IconeCategoria from '../atomos/IconeCategoria.vue';
import IconeStatus from '../atomos/IconeStatus.vue';
import DescricaoEvento from './DescricaoEvento.vue';
import HoraEvento from './HoraEvento.vue';
import Destaque from '../atomos/Destaque.vue';
import { Categoria, Status, Criticidade } from '../type';

export default defineComponent({
  name: 'Evento Timeline',
  props: {
    status: {
      required: true,
      type: String as PropType<Status>,
    },
    criticidade: {
      required: true,
      type: String as PropType<Criticidade>,
    },
    ehAtual: {
      required: false,
      type: Boolean,
      default: false,
    },
    previstoPara: {
      required: true,
      type: Date,
    },
    realizadoEm: {
      required: false,
      type: Date as PropType<Date | null>,
    },
    categoria: {
      required: true,
      type: Object as PropType<Categoria>,
    },
    titulo: {
      required: true,
      type: String,
    },
    subtitulo: {
      required: false,
      type: String,
    },
    textoDestaque: {
      required: false,
      type: String,
    },
    clicavel: {
      required: false,
      type: Boolean,
      default: true,
    },
  },
  components: {
    IconeStatus,
    IconeCategoria,
    HoraEvento,
    DescricaoEvento,
    Destaque,
  },
  emits: {
    click: (mouseEvent: MouseEvent) => true,
  },
  setup(props, { emit }) {
    const handleClick = (mouseEvent: MouseEvent) => {
      if (props.clicavel) {
        emit('click', mouseEvent);
      }
    };

    return {
      handleClick,
      eventoSelecionado: computed(() => ({
        atual: props.ehAtual,
        padrao: props.ehAtual,
      })),
    };
  },
});
</script>
<style>
/* BOX DO EVENTO */

.eventoTimeline {
  position: relative;
  width: 100%;
  border-radius: 1rem;
  background-color: transparente;
}

.clicavel {
  cursor: pointer;
}

.eventoTimeline:hover {
  background-color: var(--cor-terciaria);
}

.atual {
  background-color: var(--cor-selecao);
}
.atual .titulo,
.atual .subtitulo,
.atual .hora,
.atual .destaqueEvento {
  color: var(--cor-texto-selecao) !important;
}

.atual:hover {
  background-color: var(--cor-selecao);
}

/* box com as informações */

.eventoTimeline:before {
  content: '';
  background-color: var(--cor-linha);
  display: block;
  position: absolute;
  width: 2px;
  top: 0;
  height: 2.5rem;
  left: 11.9rem;
}

.eventoTimeline:after {
  content: '';
  background-color: var(--cor-linha);
  display: block;
  position: absolute;
  width: 2px;
  top: 6.1rem;
  bottom: 0;
  left: 11.9rem;
}

.eventoTimeline.atrasado:before {
  background-color: var(--cor-alerta);
}

.eventoTimeline.atrasado:after {
  background-color: var(--cor-alerta);
}

.eventoTimeline.atrasado:before {
  background-color: var(--cor-alerta);
}

.eventoTimeline.atrasado:after {
  background-color: var(--cor-alerta);
}
</style>
