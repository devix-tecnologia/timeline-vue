<template>
  <div class="areaEvento">
    <article
      class="eventoTimeline"
      :class="[
        evento.status,
        'criticidade-' + evento.criticidade,
        evento.visualizacao,
      ]"
    >
      <!-- É preciso fazer uma função que adicione a classe "atual" no article.  -->

      <!-- Opção 1) pegar a hora_prevista do evento, a hora_prevista do evento seguinte e determine o intervalo e depois verifique se a hora_atual está nesse intervalo. Em caso positivo ela adiciona a classe "atual" no article. -->

      <!-- Opção 2) a cada x tempo uma função verifica qual hora_prevista é menor que a hora_atual, pega a que está mais próxima e verifica se a hora_prevista do evento seguinte é maior a a hora_atual. -->

      <IconeStatus :status="evento.status" />
      <HoraEvento
        :horaPrevista="evento.hora_prevista"
        :horaRealizada="evento.hora_realizada"
      />
      <IconeCategoria
        :iconeCategoria="evento.categoria.icone"
        :categoria="evento.categoria.nome"
      />
      <DescricaoEvento :titulo="evento.titulo" :subtitulo="evento.subtitulo" />
      <Destaque :destaque="evento.destaque" />
    </article>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import IconeCategoria from '../atomos/IconeCategoria.vue';
import IconeStatus from '../atomos/IconeStatus.vue';
import DescricaoEvento from './DescricaoEvento.vue';
import HoraEvento from './HoraEvento.vue';
import Destaque from '../atomos/Destaque.vue';

export default defineComponent({
  props: {
    evento: {
      type: Object,
      required: true,
    },
  },
  components: {
    IconeStatus,
    IconeCategoria,
    HoraEvento,
    DescricaoEvento,
    Destaque,
  },
  setup(props) {
    const eventoCompleto = ref(props.evento).value;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-argument
    const horaPrevista = new Date(eventoCompleto.hora_prevista);
    console.log(horaPrevista);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const horaAtual = new Date();
    console.log(horaAtual);

    let mensagem;
    if (horaPrevista < horaAtual) {
      mensagem = 'Hora prevista é menor';
    } else if (horaPrevista > horaAtual) {
      mensagem = 'Hora prevista é MAIOR';
    }

    console.log(mensagem);
    return {};
  },
});
</script>
<style scoped>
/* BOX DO EVENTO */

.areaEvento {
  display: table-row;
  min-height: 8rem;
  position: relative !important;
  width: 100%;
}

.eventoTimeline {
  position: relative;
  width: 100%;
  border-radius: 1rem;
}

.eventoTimeline:hover {
  background: #f9f9f9;
}

.atual {
  background: var(--cor-selecao);
}

.atual:hover {
  background: var(--cor-selecao);
}

/* box com as informações */

.eventoTimeline:before {
  content: '';
  background: var(--cor-linha);
  display: block;
  position: absolute;
  width: 2px;
  top: 0;
  height: 1.5rem;
  left: 11.7rem;
}

.eventoTimeline:after {
  content: '';
  background: var(--cor-linha);
  display: block;
  position: absolute;
  width: 2px;
  top: 5.1rem;
  bottom: 0;
  left: 11.7rem;
}
</style>
