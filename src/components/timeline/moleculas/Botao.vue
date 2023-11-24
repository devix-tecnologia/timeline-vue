<template>
  olá mundo
  <button class="btn" data-testid="botao" @click="handleClick">
    <slot>
      <span v-if="icone" class="material-symbols-outlined"> {{ icone }} </span>
      {{ titulo }}
    </slot>
  </button>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, PropType } from 'vue';
import 'material-symbols/outlined.css';

export type Tamanho = 'pequeno' | 'medio' | 'grande';
export type Aparencia = 'outline' | 'preenchido' | 'vazio';

export default defineComponent({
  name: 'Botao',
  props: {
    titulo: {
      type: String,
      default: '',
    },
    icone: {
      type: String,
    },
    aparencia: {
      type: String as PropType<Aparencia>,
      default: 'outline',
    },
    tamanho: {
      type: String as PropType<Tamanho>,
      default: 'medio',
    },
  },

  emits: {
    click: (mouseEvent: MouseEvent) => true,
  },

  setup(props, { emit }) {
    props = reactive(props);

    const handleClick = (mouseEvent: MouseEvent) => {
      emit('click', mouseEvent);
    };

    const classes = computed(() => ({
      [`${props.aparencia}`]: true,
      [`${props.tamanho}`]: true,
    }));

    return {
      handleClick,
      classes,
    };
  },
});
</script>

<style scoped>
/* BOTAO */

.material-symbols-outlined {
  font-size: 2.6rem;
}
.btn {
  background: transparent;
  padding: 1.4rem;
  color: var(--cor-texto);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--cor-texto);
  border-radius: 10px;
  cursor: pointer;
  line-height: 0;
  font: var(--fonte);
  width: 100%;
  transition: all 0.1s ease-in;
}

.btn span {
  padding-right: 1.4rem;
}

.btn.preenchido {
  background: var(--cor-secundaria);
  color: var(--cor-terciaria);
}

.btn.vazio {
  background: transparent;
  padding: 1.4rem;
  display: inline-block;
  border: 0;
  width: fit-content;
  margin: 0 auto;
}

.btn.vazio:hover {
  text-decoration: underline;
}

.btn.pequeno {
  font-size: small;
  padding: 1rem;
}
.btn.medio {
  font-size: medium;
}

.btn.grande {
  font-size: large;
  font-weight: bold;
  padding: 2rem;
}

.btn:hover {
  opacity: 0.7;
  transition: all 0.1s ease-in;
}
.btn:active {
  opacity: 0.7;
  transition: all 0.1s ease-in;
}
</style>
