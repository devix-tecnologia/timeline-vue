<template>
  <PerfilTimeline
    v-if="perfilTimeline !== null"
    :nomePerfil="perfilTimeline?.nome"
    :imagemPerfil="perfilTimeline?.imagem"
    :iconePerfil="perfilTimeline?.icone"
    :formatoReduzido="true"
  />
  <section
    class="cabecalho-evento"
    :class="[`criticidade-` + cabecalhoEventoDetalhado.criticidade]"
  >
    <div class="criticidade">
      Criticidade: {{ cabecalhoEventoDetalhado.criticidade }}
    </div>
    <div class="titulo">
      <IconeCategoria
        :iconeCategoria="cabecalhoEventoDetalhado.categoria.icone"
        :categoria="cabecalhoEventoDetalhado.categoria.nome"
      />
      <h1>{{ cabecalhoEventoDetalhado.titulo }}</h1>
    </div>
    <div class="dataHora">
      <div :onclick="aoClicar" class="box">
        <span class="material-symbols-outlined"> calendar_month </span>
        <div class="horaEvento">
          <div
            v-if="cabecalhoEventoDetalhado.realizado"
            class="horaRealizada texto-grande"
          >
            {{ cabecalhoEventoDetalhado.realizado.toLocaleDateString() }}
          </div>
          <div
            v-if="cabecalhoEventoDetalhado.realizado"
            class="horaPlanejada texto-pequeno"
          >
            {{ cabecalhoEventoDetalhado.realizado.toLocaleDateString() }}
          </div>
          <div v-else class="horaRealizada texto-grande">
            {{ cabecalhoEventoDetalhado.previsto.toLocaleDateString() }}
          </div>
        </div>
      </div>
      <div :onclick="aoClicar" class="box">
        <span class="material-symbols-outlined"> schedule </span>
        <div class="horaEvento">
          <Hora
            v-if="cabecalhoEventoDetalhado.realizado"
            class="horaRealizada texto-grande"
            :hora="cabecalhoEventoDetalhado.realizado"
          />
          <Hora
            v-if="cabecalhoEventoDetalhado.realizado"
            class="horaPlanejada texto-pequeno"
            :hora="cabecalhoEventoDetalhado.previsto"
          />
          <Hora
            v-else
            class="horaRealizada texto-grande"
            :hora="cabecalhoEventoDetalhado.previsto"
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
    perfilTimeline: {
      type: Object as PropType<Perfil>,
    },
    cabecalhoEventoDetalhado: {
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

.cabecalho-evento {
  padding: 1.4rem 0;
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
}

.dataHora .box:hover {
  background: var(--cor-linha);
}

.horaRealizada {
  font-weight: 500;
}
.horaPlanejada {
  text-decoration: line-through;
}
</style>
