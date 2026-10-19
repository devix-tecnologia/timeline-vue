<template>
  <div class="separadorFilosofia" data-testid="separador-filosofia">
    <h3 class="separadorFilosofia__titulo">
      <button
        v-if="navegavel"
        type="button"
        class="separadorFilosofia__conteudo separadorFilosofia__conteudo--navegavel"
        @click="$emit('click', $event)"
      >
        <span
          class="material-symbols-outlined separadorFilosofia__icone"
          data-icone="calendar_month"
          aria-hidden="true"
        ></span>
        <time :datetime="dataIso">{{ rotulo }}</time>
        <span
          class="material-symbols-outlined separadorFilosofia__seta"
          data-icone="chevron_right"
          aria-hidden="true"
        ></span>
      </button>
      <span v-else class="separadorFilosofia__conteudo">
        <span
          class="material-symbols-outlined separadorFilosofia__icone"
          data-icone="calendar_month"
          aria-hidden="true"
        ></span>
        <time :datetime="dataIso">{{ rotulo }}</time>
      </span>
    </h3>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import 'material-symbols/outlined.css';
import { dataIso, diaComRotulo } from '../utils/datas';

/**
 * Separador de dia da aparência `filosofia`: ícone de calendário e "Hoje, 7 de outubro".
 * Com `navegavel`, vira um botão com seta, que a agenda usa para trocar de dia.
 */
export default defineComponent({
  name: 'SeparadorPeriodoFilosofia',
  props: {
    dataSeparador: {
      required: true,
      type: Date,
    },
    navegavel: {
      type: Boolean,
      default: false,
    },
  },
  emits: {
    click: (_mouseEvent: MouseEvent) => true,
  },
  setup(props) {
    return {
      dataIso: computed(() => dataIso(props.dataSeparador)),
      rotulo: computed(() => diaComRotulo(props.dataSeparador)),
    };
  },
});
</script>

<style scoped>
.separadorFilosofia {
  color: var(--cor-texto);
}

.separadorFilosofia__titulo {
  font-size: 1.7rem;
  font-weight: 700;
  line-height: 2.4rem;
}

.separadorFilosofia__conteudo {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  width: 100%;
  min-height: 4.4rem;
}

.separadorFilosofia__conteudo--navegavel {
  padding: 0;
  border: 0;
  background: none;
  color: inherit;
  font: inherit;
  text-align: left;
  cursor: pointer;
}

.separadorFilosofia__conteudo--navegavel:focus-visible {
  outline: 3px solid var(--cor-acao);
  outline-offset: 2px;
}

.separadorFilosofia__conteudo time {
  flex: 1;
}

/* Ícones no pseudo-elemento, para o axe não medir a ligadura como texto. */
.separadorFilosofia__icone::before,
.separadorFilosofia__seta::before {
  content: attr(data-icone);
}

.separadorFilosofia .separadorFilosofia__icone {
  color: var(--cor-secundaria);
  font-size: 2.6rem;
}

.separadorFilosofia .separadorFilosofia__seta {
  color: var(--cor-apoio);
  font-size: 2.4rem;
}
</style>
