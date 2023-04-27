<template>
  <div class="areaCategoria">
    <div
      class="iconeCategoria"
      :class="classes"
      :style="style"
      :alt="categoria"
    >
      <span class="material-symbols-outlined"> {{ iconeCategoria }} </span>
    </div>
  </div>
</template>
<script>
import { defineComponent, reactive, computed } from 'vue';
export default defineComponent({
  name: 'categoria',
  props: {
    iconeCategoria: {
      type: String,
      required: true,
    },
    categoria: {
      type: String,
    },
    escuro: {
      type: Boolean,
      default: true,
    },
    tipo: {
      type: String,
    },
    borderColor: {
      type: String,
    },
    backgroundColor: {
      type: String,
    },
  },
  setup(props) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        'bg-escuro': props.escuro,
        'bg-claro': !props.escuro,
        [`borda-${props.tipo || 'padrao'}`]: true,
      })),
      style: computed(() => ({
        borderColor: props.borderColor,
        backgroundColor: props.backgroundColor,
      })),
    };
  },
});
</script>
<style scoped>
/* icone com categoria */

.areaCategoria {
  display: table-cell;
  align-items: center;
  width: 3rem;
  padding: 1.8rem 1.4rem;
}

.bg-escuro,
.iconeCategoria {
  background: var(--cor-secundaria);
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: var(--cor-terciaria);
  border: 3px solid var(--cor-secundaria);
}

.iconeCategoria span {
  font-size: 2rem;
}

.iconeCategoria.bg-claro,
.realizado .iconeCategoria,
.cancelado .iconeCategoria,
.adiado .iconeCategoria {
  opacity: 0.3;
}

.iconeCategoria.borda-alerta,
.criticidade-media .iconeCategoria {
  border-color: var(--cor-alerta);
}

.iconeCategoria.borda-importante,
.criticidade-alta .iconeCategoria {
  border-color: var(--cor-importante);
}

.iconeCategoria.borda-sucesso {
  border-color: var(--cor-sucesso);
}

.bg-claro.iconeCategoria.borda-importante,
.adiado.criticidade-alta .iconeCategoria,
.cancelado.criticidade-alta .iconeCategoria,
.realizado.criticidade-alta .iconeCategoria {
  border-color: var(--cor-importante);
}
</style>
