<template>
  <div class="separadorMarcos" data-testid="separador-marcos">
    <h3 class="separadorMarcos__titulo">
      <button
        v-if="navegavel"
        type="button"
        class="separadorMarcos__conteudo separadorMarcos__conteudo--navegavel"
        @click="$emit('click', $event)"
      >
        <span
          class="material-symbols-outlined separadorMarcos__icone"
          data-icone="calendar_month"
          aria-hidden="true"
        ></span>
        <time :datetime="dataIso">{{ rotulo }}</time>
        <span
          class="material-symbols-outlined separadorMarcos__seta"
          data-icone="chevron_right"
          aria-hidden="true"
        ></span>
      </button>
      <span v-else class="separadorMarcos__conteudo">
        <span
          class="material-symbols-outlined separadorMarcos__icone"
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
 * Separador de dia da aparência `marcos`: ícone de calendário e "Hoje, 7 de outubro".
 * Com `navegavel`, vira um botão com seta, que a agenda usa para trocar de dia.
 */
export default defineComponent({
  name: 'SeparadorPeriodoMarcos',
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
.separadorMarcos {
  color: var(--cor-texto);
}

.separadorMarcos__titulo {
  font-size: 1.7rem;
  font-weight: 700;
  line-height: 2.4rem;
}

.separadorMarcos__conteudo {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  width: 100%;
  min-height: 4.4rem;
}

.separadorMarcos__conteudo--navegavel {
  padding: 0;
  border: 0;
  background: none;
  color: inherit;
  font: inherit;
  text-align: left;
  cursor: pointer;
}

.separadorMarcos__conteudo--navegavel:focus-visible {
  outline: 3px solid var(--cor-acao);
  outline-offset: 2px;
}

.separadorMarcos__conteudo time {
  flex: 1;
}

/* Ícones no pseudo-elemento, para o axe não medir a ligadura como texto. */
.separadorMarcos__icone::before,
.separadorMarcos__seta::before {
  content: attr(data-icone);
}

.separadorMarcos .separadorMarcos__icone {
  color: var(--cor-secundaria);
  font-size: 2.6rem;
}

.separadorMarcos .separadorMarcos__seta {
  color: var(--cor-apoio);
  font-size: 2.4rem;
}
</style>
