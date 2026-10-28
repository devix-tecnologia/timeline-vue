<template>
  <label class="campoBusca" data-testid="campo-busca">
    <span
      class="material-symbols-outlined campoBusca__icone"
      data-icone="search"
      aria-hidden="true"
    ></span>
    <input
      class="campoBusca__entrada"
      type="search"
      :value="modelValue"
      :placeholder="placeholder"
      :aria-label="rotulo"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import 'material-symbols/outlined.css';

/** Campo de busca com a lupa à esquerda. */
export default defineComponent({
  name: 'CampoBusca',
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: 'Buscar',
    },
    /** Nome acessível do campo; o placeholder some ao digitar e não serve de rótulo. */
    rotulo: {
      required: true,
      type: String,
    },
  },
  emits: {
    'update:modelValue': (_valor: string) => true,
  },
});
</script>

<style scoped>
.campoBusca {
  display: flex;
  align-items: center;
  gap: 1rem;
  min-height: 4.8rem;
  padding: 0 1.4rem;
  border-radius: 1.2rem;
  background: var(--cor-terciaria);
  color: var(--cor-texto);
  cursor: text;
}

.campoBusca:focus-within {
  outline: 3px solid var(--cor-acao);
  outline-offset: 2px;
}

/* Ícone no pseudo-elemento, para o axe não medir a ligadura como texto. */
.campoBusca .campoBusca__icone {
  color: var(--cor-apoio);
  font-size: 2.4rem;
}

.campoBusca__icone::before {
  content: attr(data-icone);
}

.campoBusca__entrada {
  flex: 1;
  min-width: 0;
  height: 4.8rem;
  border: 0;
  background: transparent;
  color: inherit;
  font: inherit;
  font-size: 1.6rem;
}

.campoBusca__entrada::placeholder {
  color: var(--cor-apoio);
  opacity: 1;
}
</style>
