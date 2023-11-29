<template>
  <EditarEvento
    data-testid="adiantar-horario"
    @salvarClick="emitirSalvarClick"
    :salvarVisivel="salvarVisivel"
  >
    <template #conteudo>
      <h2>Adiantar horário:</h2>
      <div>
        <div>
          <input id="horario" type="text" data-testid="horario" value="29/11/2023 - 14:15"/>
        </div>

        <Botao
          data-testid="adiantar-15-minutos"
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
import { defineComponent, PropType, reactive, ref } from 'vue';
import 'material-symbols/outlined.css';

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
  emmits: {
    salvarClick: (horario: Date, mouseEvent: MouseEvent) => true,
    cancelarClick: (mouseEvent: MouseEvent) => true,
  },
  setup(props, { emit }) {
    props = reactive(props);

    const horarioOriginal = ref(new Date(props.evento.previstoPara));
    const horarioAdiantado = ref(format(horarioOriginal.value, 'dd/MM/yyyy - HH:mm'));

    const adiantarHorario = () => {
      const novoHorario = subMinutes(horarioOriginal.value, 15);
      horarioOriginal.value = novoHorario;
      horarioAdiantado.value = format(novoHorario, 'dd/MM/yyyy - HH:mm');
    };

    const emitirSalvarClick = (mouseEvent: MouseEvent) => {
      emit('salvarClick', horarioOriginal.value, mouseEvent);
    };

    return {
      horarioAdiantado,
      adiantarHorario,
      emitirSalvarClick,
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
