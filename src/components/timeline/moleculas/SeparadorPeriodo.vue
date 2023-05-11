<template>
  <div class="separadorPeriodo">
    <div class="areaData">
      <BoxData :dataNumero="dataSeparador.getDate()" :aparencia="aparencia" />
    </div>
    <h3 class="titulo" :class="aparencia">
      {{ mesCorrente(dataSeparador.getMonth()) }} de
      {{ dataSeparador.getFullYear() }}
    </h3>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import BoxData from "../atomos/BoxData.vue";

export default defineComponent({
  name: "SeparadorPeriodo",
  props: {
    dataSeparador: {
      required: true,
      type: Date,
    },
    aparencia: {
      type: String,
    },
  },
  components: { BoxData },
  setup(props) {
    const arrayMes = new Array(12);
    arrayMes[0] = "Janeiro";
    arrayMes[1] = "Fevereiro";
    arrayMes[2] = "Março";
    arrayMes[3] = "Abril";
    arrayMes[4] = "Maio";
    arrayMes[5] = "Junho";
    arrayMes[6] = "Julho";
    arrayMes[7] = "Agosto";
    arrayMes[8] = "Setembro";
    arrayMes[9] = "Outubro";
    arrayMes[10] = "Novembro";
    arrayMes[11] = "Dezembro";

    const mesCorrente = (mes: number) => {
      return arrayMes[mes];
    };
    return { mesCorrente };
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
  content: "";
  background: var(--cor-linha);
  display: block;
  position: absolute;
  width: 2px;
  height: 2.5rem;
  top: 0;
  left: 11.9rem;
}

.areaData:after {
  content: "";
  background: var(--cor-linha);
  display: block;
  position: absolute;
  width: 2px;
  height: 2.5rem;
  bottom: 0;
  left: 11.9rem;
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
