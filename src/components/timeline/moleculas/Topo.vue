<template>
  <div class="topo" :class="classes">
    <div class="conteudoTitulo">
      <button class="btn_voltar" @click="telaAnterior()">
        <span class="material-symbols-outlined"> arrow_back </span>
      </button>
      <h3 class="titulo">{{ titulo }}</h3>
    </div>
    <!-- <span class="material-symbols-outlined"> more_vert </span> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from "vue";

export default defineComponent({
  name: "Topo",
  props: {
    titulo: {
      type: String,
    },
    escuro: {
      type: Boolean,
      default: true,
    },
    link: {},
  },
  setup(props) {
    function telaAnterior() {
      alert("Volta para a tela anterior");
    }
    props = reactive(props);
    return {
      telaAnterior,
      classes: computed(() => ({
        "bg-escuro": props.escuro,
        "bg-claro": !props.escuro,
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
.topo {
  background: var(--cor-terciaria);
  padding: 1.4rem;
  color: var(--cor-secundaria);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.conteudoTitulo {
  padding-right: 1.4rem;
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
}

.titulo {
  padding-left: 1.4rem;
}

.topo.bg-escuro {
  background: var(--cor-secundaria);
  color: var(--cor-terciaria);
}

.btn_voltar {
  border: 0;
  cursor: pointer;
  padding-right: 1.4rem;
  background-color: transparent;
  line-height: 0;
}
</style>
