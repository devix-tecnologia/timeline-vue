<template>
  <EditarEvento :salvarVisivel="AdiantarHorario.salvarVisivel" data-testid="adiantar-horario">
    <template #conteudo>
      <h2>Adiantar horário:</h2>
      <div>
        <div>
          <input id="horario" type="text" v-model="AdiantarHorario.horarioFormatado" />
        </div>

        <Botao
          data-testid="botao-adiantar-horario"
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
import { defineComponent, DeprecationTypes, PropType, reactive, ref, toRef } from 'vue';
import 'material-symbols/outlined.css';

// import { AoClicarEvento } from "../type";
import { EventoDetalhado } from '../typeDetalhado';
import EditarEvento from '../organismos/EditarEvento.vue';
import Botao from '../moleculas/Botao.vue';
import { format, subMinutes } from 'date-fns';

export default defineComponent({
  props: {
    salvarVisivel: {
      type: Boolean,
    },
    evento: {
      required: true,
      type: Object as PropType<EventoDetalhado>,
    },
  },
  components: { EditarEvento, Botao },

  setup(props) {
    const salvarVisivel = toRef(props, 'salvarVisivel');
    const dadosEvento = toRef(props, 'evento');
    const previstoPara = ref(dadosEvento.value.previstoPara);

    const AdiantarHorario = reactive({
      salvarVisivel: salvarVisivel.value,
      horarioOriginal: new Date(previstoPara.value),
      horarioNovo: new Date(previstoPara.value),
      horarioFormatado: format(previstoPara.value, 'dd/MM/yyyy - HH:mm'),
    });

    const adiantarHorario = () => {
      AdiantarHorario.horarioNovo = subMinutes(AdiantarHorario.horarioNovo, 15);
      AdiantarHorario.horarioFormatado = format(AdiantarHorario.horarioNovo, 'dd/MM/yyyy - HH:mm');
    };

    return {
      AdiantarHorario,
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
