<template>
  <topo :titulo="dadosEvento.categoria.nome" :escuro="false" />
  <div class="evento">
    <CabecalhoEventoDetalhado
      :perfilEvento="perfilEvento"
      :dadosEvento="dadosEvento"
      :aoClicar="dadosEvento.aoClicar"
    />

    <section class="descricao">
      <slot id="descricao">
        {{ dadosEvento.subtitulo }}
      </slot>
    </section>
    <Observacoes
      :observacoes="dadosEvento.observacoes"
      :tituloBotao="`Inserir observação`"
    />

    <StatusEvento
      :aparencia="`preenchido`"
      :aoClicar="dadosEvento.aoClicar"
      :status="dadosEvento.status"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from "vue";
import "material-symbols/outlined.css";

import { Perfil } from "../type";
import { EventoDetalhado } from "../typeDetalhado";
import Topo from "../moleculas/Topo.vue";
import CabecalhoEventoDetalhado from "../moleculas/CabecalhoEventoDetalhado.vue";
import Observacoes from "../moleculas/Observacoes.vue";
import StatusEvento from "../moleculas/StatusEvento.vue";

export default defineComponent({
  props: {
    perfilEvento: {
      required: true,
      type: Object as PropType<Perfil>,
    },
    dadosEvento: {
      required: true,
      type: Object as PropType<EventoDetalhado>,
    },
  },
  components: { Topo, CabecalhoEventoDetalhado, Observacoes, StatusEvento },
  setup(props) {
    return {};
  },
});
</script>

<style>
.evento {
  padding: 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
}

.descricao {
  font-size: 1.4rem;
}
</style>
