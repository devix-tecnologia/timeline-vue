<template>
  <EditarEvento :aoClicar="aoClicar" :salvarVisivel="salvarVisivel">
    <template #conteudo>
      <h2>Adiantar horário:</h2>
      <div>
        <div>
          <input id="horario" type="text" v-model="horarioAdiantado" />
        </div>

        <Botao
          @click="adiantarHorario"
          :titulo="`- 15 minutos`"
          :aparencia="`preenchido`"
          :tamanho="`pequeno`"
        />
      </div>
    </template>
  </EditarEvento>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive, ref } from "vue";
import "material-symbols/outlined.css";

import { AoClicarEvento } from "../type";
import { EventoDetalhado } from "../typeDetalhado";
import EditarEvento from "../organismos/EditarEvento.vue";
import Botao from "../moleculas/Botao.vue";
import { format, subMinutes } from "date-fns";

export default defineComponent({
  props: {
    aoClicar: {
      required: false,
      type: Function as PropType<AoClicarEvento>,
    },
    salvarVisivel: {
      type: Boolean,
    },
    dadosEvento: {
      required: true,
      type: Object as PropType<EventoDetalhado>,
    },
  },
  components: { EditarEvento, Botao },

  setup(props) {
    props = reactive(props);

    const horarioOriginal = ref(new Date(props.dadosEvento.previstoPara));
    const horarioAdiantado = ref(
      format(horarioOriginal.value, "dd/MM/yyyy - HH:mm")
    );

    const adiantarHorario = () => {
      const novoHorario = subMinutes(horarioOriginal.value, 15);
      horarioOriginal.value = novoHorario;
      horarioAdiantado.value = format(novoHorario, "dd/MM/yyyy - HH:mm");
    };

    return {
      horarioAdiantado,
      adiantarHorario,
    };
  },
});
</script>

<style>
.area-conteudo {
  padding: 1.4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.4rem;
  text-align: center;
  color: var(--cor-texto);
}
.area-conteudo input {
  width: 100%;
  border: 1px solid var(--cor-linha);
  border-radius: 10px;
  padding: 1.4rem;
  background: var(--cor-fundo);
  color: var(--cor-texto);
}

.area-conteudo input:focus {
  border-color: var(--cor-acao);
}
#horario {
  border: 0;
  text-align: center;
  padding: 1.4rem;
  font-size: large;
}
</style>
