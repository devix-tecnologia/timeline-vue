<template>
  <section class="cabecalho-evento" :class="[`criticidade-` + evento.criticidade]">
    <PerfilTimeline
      v-if="perfil"
      :nomePerfil="perfil.nome"
      :imagemPerfil="perfil.imagem"
      :iconePerfil="perfil.icone"
      :formatoReduzido="true"
    />
    <div v-if="evento.criticidade !== 'baixa'" class="criticidade">
      Criticidade: {{ evento.criticidade }}
    </div>
    <div class="titulo">
      <IconeCategoria :iconeCategoria="evento.categoria.icone" :categoria="evento.categoria.nome" />
      <h1>{{ evento.titulo }}</h1>
    </div>
    <div class="dataHora">
      <div class="box">
        <span class="material-symbols-outlined"> calendar_month </span>
        <div class="horaEvento">
          <div v-if="evento.realizado" class="horaRealizada texto-grande">
            {{ evento.realizado.toLocaleDateString() }}
          </div>
          <div v-if="evento.realizado" class="horaPlanejada texto-pequeno">
            {{ evento.realizado.toLocaleDateString() }}
          </div>
          <div v-else class="horaRealizada texto-grande">
            {{ evento.previsto.toLocaleDateString() }}
          </div>
        </div>
      </div>
      <div class="box">
        <span class="material-symbols-outlined"> schedule </span>
        <div class="horaEvento">
          <Hora
            v-if="evento.realizado"
            class="horaRealizada texto-grande"
            :hora="evento.realizado"
          />
          <Hora
            v-if="evento.realizado"
            class="horaPlanejada texto-pequeno"
            :hora="evento.previsto"
          />
          <Hora v-else class="horaRealizada texto-grande" :hora="evento.previsto" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import 'material-symbols/outlined.css';
import { defineComponent, PropType } from 'vue';
import Botao from './Botao.vue';
import { EventoDetalhado } from '../typeDetalhado';
import { Perfil } from '../type';
import PerfilTimeline from './PerfilTimeline.vue';
import IconeCategoria from '../atomos/IconeCategoria.vue';
import Hora from '../atomos/Hora.vue';

export default defineComponent({
  components: { Botao, PerfilTimeline, IconeCategoria, Hora },
  name: 'CabecalhoEventoDetalhado',
  props: {
    perfil: {
      required: true,
      type: Object as PropType<Perfil>,
    },
    evento: {
      required: true,
      type: Object as PropType<EventoDetalhado>,
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
