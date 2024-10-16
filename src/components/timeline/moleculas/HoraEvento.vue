<template>
  <div class="areaHora">
    <div class="horaEvento">
      <Hora v-if="horaRealizada" :hora="horaRealizada" style="padding-top: 0.3rem" />
      <Hora
        :hora="horaPrevista"
        :aparencia="horaRealizada ? 'riscada' : 'padrao'"
        :style="horaRealizada ? '' : 'padding-top: 1.2rem'"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Hora from '../atomos/Hora.vue';

export default defineComponent({
  name: 'Hora Evento',
  components: { Hora },
  props: {
    horaPrevista: {
      type: Date,
      required: true,
    },
    horaRealizada: {
      required: false,
      type: Date as PropType<Date | null>,
    },
  },
});
</script>

<style scoped>
.realizado .horaEvento,
.cancelado .horaEvento,
.adiado .horaEvento {
  opacity: 0.4;
}
.areaHora {
  width: 4.5rem;
  display: table-cell;
  vertical-align: top;
  text-align: right;
  padding: 2.4rem 0;
}
.horaEvento {
  line-height: 1.4rem;
  text-align: right;
  display: flex;
  flex-direction: column;
}
</style>
