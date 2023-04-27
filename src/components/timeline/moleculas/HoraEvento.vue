<template>
  <div class="areaHora">
    <div class="horaEvento">
      <Hora
        v-if="horaRealizada"
        class="horaRealizada texto-grande"
        :hora="horaRealizada"
        style="padding-top: 0.3rem"
      />
      <Hora
        v-if="horaRealizada"
        class="horaPlanejada texto-pequeno"
        :hora="horaPrevista"
      />

      <Hora
        v-else
        class="horaRealizada texto-grande"
        :hora="horaPrevista"
        style="padding-top: 1.2rem"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Hora from '../atomos/Hora.vue';

export default defineComponent({
  props: {
    horaPrevista: {
      required: true,
    },
    horaRealizada: {},
    // aparencia: {
    //   type: String,
    // },
  },
  components: { Hora },
  setup() {
    return {};
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
  padding: 1.4rem 0;
}
.horaEvento {
  line-height: 1.4rem;
  text-align: right;
  display: flex;
  flex-direction: column;
}
.horaRealizada {
  font-weight: 500;
}
.horaPlanejada {
  text-decoration: line-through;
}
</style>
