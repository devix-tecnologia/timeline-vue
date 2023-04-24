<template>
  <div :class="classes" class="iconeStatus"></div>
</template>
<script lang="ts">
import { defineComponent, reactive, computed } from 'vue';

export default defineComponent({
  name: 'status',
  props: {
    status: {
      required: true,
      type: String,
    },
  },
  components: {},
  setup(props) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        [`${props.status || 'planejado'}`]: true,
      })),
    };
  },
});
</script>
<style scoped>
/* icones */
.iconeStatus {
  font-size: 1.6rem;
  line-height: 1rem;
  color: var(--cor-secundaria);
  width: 1.6rem;
  display: table-cell;
  padding: 1.4rem;
  vertical-align: top;
  padding-top: 2.7rem;
}

.realizado.iconeStatus {
  color: var(--cor-sucesso);
}
.realizado.iconeStatus::before {
  font-family: 'Material Symbols Outlined';
  content: '\e86c';
}
.cancelado.iconeStatus {
  color: var(--cor-importante);
}
.cancelado.iconeStatus::before {
  font-family: 'Material Symbols Outlined';
  content: '\e5c9';
}
.adiado.iconeStatus {
  color: var(--cor-apoio);
}
.adiado.iconeStatus::before {
  font-family: 'Material Symbols Outlined';
  content: '\e923';
}

.planejado.iconeStatus {
  opacity: 0;
}
.planejado.iconeStatus::before {
  font-family: 'Material Symbols Outlined';
  content: '\e838';
}
.atrasado.iconeStatus::before {
  font-family: 'Material Symbols Outlined';
  content: '\e8b5';
}
</style>
