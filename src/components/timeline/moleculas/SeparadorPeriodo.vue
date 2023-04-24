<template>
  <div class="separadorPeriodo">
    <div class="areaData">
      <BoxData :dataNumero="dia" :aparencia="aparencia" />
    </div>
    <h3 class="titulo" :class="aparencia">{{ mes }}</h3>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BoxData from '../atomos/BoxData.vue';

export default defineComponent({
  name: 'SeparadorPeriodo',
  props: {
    dataSeparador: {
      required: true,
      type: String,
    },
    aparencia: {
      type: String,
    },
  },
  components: { BoxData },
  setup(props) {
    const numeroMes = [
      'janeiro',
      'fevereiro',
      'março',
      'abril',
      'maio',
      'junho',
      'julho',
      'agosto',
      'setembro',
      'outubro',
      'novembro',
      'dezembro',
    ];

    // eslint-disable-next-line vue/no-setup-props-destructure
    const dataRecebida = props.dataSeparador;
    const data = new Date(dataRecebida);
    const ano = data.getFullYear();
    const mes = numeroMes[data.getMonth()];
    const dia = data.getDate();
    return { dataRecebida, ano, mes, dia };
  },
});
</script>

<style scoped>
/* SEPARADOR */

.separadorPeriodo {
  display: table-row;
  width: 100%;
  position: relative;
  background: #fff;
}

.areaData {
  display: table-cell;
  padding: 2.8rem 1.4rem;
  padding-left: 10.1rem;
  position: relative;
}

.areaData:before {
  content: '';
  background: var(--cor-linha);
  display: block;
  position: absolute;
  width: 2px;
  height: 2.5rem;
  top: 0;
  left: 11.7rem;
}

.areaData:after {
  content: '';
  background: var(--cor-linha);
  display: block;
  position: absolute;
  width: 2px;
  height: 2.5rem;
  bottom: 0;
  left: 11.7rem;
}

.separadorPeriodo .titulo {
  text-transform: uppercase;
  padding-bottom: 3.45rem;
  color: var(--cor-texto);
}

.separadorPeriodo .titulo.claro {
  color: var(--cor-apoio);
}
</style>
