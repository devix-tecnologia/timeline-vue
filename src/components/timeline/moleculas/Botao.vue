<template>
  <button class="btn" :onclick="aoClicar" :class="classes">
    <slot></slot>
    <span v-if="icone" class="material-symbols-outlined"> {{ icone }} </span>
    {{ titulo }}
  </button>
</template>

<script lang="ts">
import { defineComponent, reactive, computed, PropType } from "vue";
import { AoClicarEvento } from "../type";
import "material-symbols/outlined.css";

export default defineComponent({
  name: "Botao",
  props: {
    titulo: {
      type: String,
    },
    icone: {
      type: String,
    },
    aparencia: {
      type: String,
    },
    tamanho: {
      type: String,
    },
    aoClicar: {
      required: false,
      type: Function as PropType<AoClicarEvento>,
    },
  },
  setup(props) {
    props = reactive(props);

    return {
      classes: computed(() => ({
        [`${props.aparencia || "outline"}`]: true,
        [`${props.tamanho || "medio"}`]: true,
      })),
    };
  },
});
</script>

<style scoped>
/* CABEÇALHO */
.material-symbols-outlined {
  font-size: 2.6rem;
}
.btn {
  background: var(--cor-clara);
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
}

.btn span {
  padding-right: 1.4rem;
}

.btn.preenchido {
  background: var(--cor-secundaria);
  color: var(--cor-terciaria);
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
