<template>
  <section
    class="cabecalho-evento"
    :class="[`criticidade-` + dadosEvento.criticidade]"
  >
    <PerfilTimeline
      v-if="perfilEvento"
      :nomePerfil="perfilEvento.nome"
      :imagemPerfil="perfilEvento.imagem"
      :iconePerfil="perfilEvento.icone"
      :formatoReduzido="true"
    />
    <div v-if="dadosEvento.criticidade !== 'baixa'" class="criticidade">
      Criticidade: {{ dadosEvento.criticidade }}
    </div>
    <div class="titulo">
      <IconeCategoria
        :iconeCategoria="dadosEvento.categoria.icone"
        :categoria="dadosEvento.categoria.nome"
      />
      <h1>{{ dadosEvento.titulo }}</h1>
    </div>
    <div class="dataHora">
      <div :onclick="aoClicar" class="box">
        <span class="material-symbols-outlined"> calendar_month </span>
        <div class="horaEvento">
          <div v-if="dadosEvento.realizado" class="horaRealizada texto-grande">
            {{ dadosEvento.realizado.toLocaleDateString() }}
          </div>
          <div v-if="dadosEvento.realizado" class="horaPlanejada texto-pequeno">
            {{ dadosEvento.realizado.toLocaleDateString() }}
          </div>
          <div v-else class="horaRealizada texto-grande">
            {{ dadosEvento.previsto.toLocaleDateString() }}
          </div>
        </div>
      </div>
      <div :onclick="aoClicar" class="box">
        <span class="material-symbols-outlined"> schedule </span>
        <div class="horaEvento">
          <Hora
            v-if="dadosEvento.realizado"
            class="horaRealizada texto-grande"
            :hora="dadosEvento.realizado"
          />
          <Hora
            v-if="dadosEvento.realizado"
            class="horaPlanejada texto-pequeno"
            :hora="dadosEvento.previsto"
          />
          <Hora
            v-else
            class="horaRealizada texto-grande"
            :hora="dadosEvento.previsto"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import "material-symbols/outlined.css";
import { defineComponent, reactive, PropType } from "vue";
import { Perfil, AoClicarEvento } from "../type";
import Botao from "./Botao.vue";
import { EventoDetalhado } from "../typeDetalhado";
import PerfilTimeline from "./PerfilTimeline.vue";
import IconeCategoria from "../atomos/IconeCategoria.vue";
import Hora from "../atomos/Hora.vue";

export default defineComponent({
  components: { Botao, PerfilTimeline, IconeCategoria, Hora },
  name: "CabecalhoEventoDetalhado",
  props: {
    perfilEvento: {
      required: true,
      type: Object,
    },
    dadosEvento: {
      required: true,
      type: Object as PropType<EventoDetalhado>,
    },
    aoClicar: {
      required: false,
      type: Function as PropType<AoClicarEvento>,
    },
  },
  setup(props) {
    return {};
  },
});
</script>

<style scoped>
/* CABEÇALHO */
.material-symbols-outlined {
  font-size: 2.6rem;
}

.perfilTimeline {
  margin-bottom: 1rem;
}

.cabecalho-evento {
  margin-bottom: 1.4rem;
}

.criticidade {
  font-size: 1rem;
  text-transform: uppercase;
  color: var(--cor-apoio);
}

.criticidade-alta .criticidade {
  color: var(--cor-importante);
}

.criticidade-media .criticidade {
  color: var(--cor-alerta);
}

.titulo {
  display: flex;
  flex-direction: row;
  justify-content: left;
  gap: 1.4rem;
  margin-top: 0.5rem;
  margin-bottom: 3.6rem;
}

.titulo .areaCategoria {
  display: block;
  padding: 0;
  width: auto;
}

.titulo h1 {
  font-size: 2rem;
  color: var(--cor-texto);
}

.dataHora {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1.4rem;
  color: var(--cor-texto);
}
.dataHora .box {
  padding: 1.4rem;
  background: var(--cor-terciaria);
  border-radius: 1rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  color: var(--cor-texto);
}

.dataHora .box:hover {
  background: var(--cor-apoio);
}

.horaRealizada {
  font-weight: 500;
}
.horaPlanejada {
  text-decoration: line-through;
}
</style>
