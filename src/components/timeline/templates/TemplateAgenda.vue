<template>
  <div class="templateAgenda" data-testid="template-agenda">
    <header class="templateAgenda__topo">
      <div class="templateAgenda__marca">
        <slot name="marca" />
      </div>
      <AvatarTimeline
        class="templateAgenda__avatar"
        :imagem="perfil.imagem"
        :iniciais="iniciais"
        :altText="`Foto de ${perfil.nome}`"
        aria-hidden="true"
      />
    </header>

    <div class="templateAgenda__identificacao">
      <h1 class="templateAgenda__titulo">{{ titulo }}</h1>
      <h2 class="templateAgenda__nome">{{ perfil.nome }}</h2>
      <p v-if="perfil.descricao" class="templateAgenda__descricao">{{ perfil.descricao }}</p>
    </div>

    <CampoBusca
      v-model="busca"
      placeholder="Buscar evento ou cliente"
      rotulo="Buscar evento ou cliente"
    />

    <SeletorOpcoes
      v-model="visao"
      aparencia="segmentado"
      rotulo="Visão dos eventos"
      :opcoes="visoes"
    />

    <AgendaEventos
      v-if="visao === 'agenda'"
      :eventos="eventosBuscados"
      :dia="dia"
      :filtroInicial="filtroInicial"
      @evento-click="(evento, mouseEvent) => $emit('eventoClick', evento, mouseEvent)"
      @acao-click="(evento, acao, mouseEvent) => $emit('acaoClick', evento, acao, mouseEvent)"
      @dia-click="(mouseEvent) => $emit('diaClick', mouseEvent)"
    />
    <template v-else>
      <Timeline
        v-if="historico.length > 0"
        aparencia="agiliza"
        :eventosTimeline="historico"
        @evento-click="(evento, mouseEvent) => $emit('eventoClick', evento, mouseEvent)"
        @acao-click="(evento, acao, mouseEvent) => $emit('acaoClick', evento, acao, mouseEvent)"
      />
      <p v-else class="templateAgenda__vazio">Nenhum evento no histórico.</p>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, PropType } from 'vue';
import AvatarTimeline from '../atomos/AvatarTimeline.vue';
import CampoBusca from '../moleculas/CampoBusca.vue';
import SeletorOpcoes from '../moleculas/SeletorOpcoes.vue';
import AgendaEventos from '../organismos/AgendaEventos.vue';
import Timeline from '../organismos/Timeline.vue';
import { FILTROS_AGENDA, FiltroAgenda } from '../organismos/AgendaEventos.types';
import { AcaoEvento, Evento, Perfil } from '../type';
import { ehPendente } from '../utils/agenda';
import { iniciaisDoNome, normalizarParaBusca } from '../utils/texto';
import { VISOES_AGENDA, VisaoAgenda, ROTULOS_VISAO_AGENDA } from './TemplateAgenda.types';

/**
 * Tela de agenda de uma pessoa: busca, e a escolha entre a agenda (o que falta fazer) e o
 * histórico (o que já se resolveu, na Timeline com a aparência `agiliza`). A marca do
 * produto entra pelo slot `marca`; a navegação do aplicativo fica com quem usa o template.
 */
export default defineComponent({
  name: 'TemplateAgenda',
  components: { AvatarTimeline, CampoBusca, SeletorOpcoes, AgendaEventos, Timeline },
  props: {
    perfil: {
      required: true,
      type: Object as PropType<Perfil>,
    },
    eventos: {
      required: true,
      type: Array as PropType<Evento[]>,
    },
    titulo: {
      type: String,
      default: 'Eventos',
    },
    dia: {
      type: Date,
      default: () => new Date(),
    },
    visaoInicial: {
      type: String as PropType<VisaoAgenda>,
      default: 'agenda',
      validator: (visao: string) => (VISOES_AGENDA as readonly string[]).includes(visao),
    },
    filtroInicial: {
      type: String as PropType<FiltroAgenda>,
      default: 'todos',
      validator: (filtro: string) => (FILTROS_AGENDA as readonly string[]).includes(filtro),
    },
  },
  emits: {
    eventoClick: (_evento: Evento, _mouseEvent: MouseEvent) => true,
    acaoClick: (_evento: Evento, _acao: AcaoEvento, _mouseEvent: MouseEvent) => true,
    diaClick: (_mouseEvent: MouseEvent) => true,
  },
  setup(props) {
    const busca = ref('');
    const visao = ref<VisaoAgenda>(props.visaoInicial);

    const eventosBuscados = computed(() => {
      const termo = normalizarParaBusca(busca.value);
      if (!termo) {
        return props.eventos;
      }
      return props.eventos.filter((evento) =>
        [evento.titulo, evento.subtitulo, evento.destaque, evento.categoria.nome].some((texto) =>
          normalizarParaBusca(texto ?? '').includes(termo)
        )
      );
    });

    return {
      busca,
      visao,
      eventosBuscados,
      historico: computed(() => eventosBuscados.value.filter((evento) => !ehPendente(evento))),
      iniciais: computed(() => iniciaisDoNome(props.perfil.nome)),
      visoes: VISOES_AGENDA.map((valor) => ({ valor, rotulo: ROTULOS_VISAO_AGENDA[valor] })),
    };
  },
});
</script>

<style scoped>
.templateAgenda {
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding: 1.6rem 2rem 3.2rem;
  background: var(--cor-fundo);
  color: var(--cor-texto);
}

.templateAgenda__topo {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.6rem;
  min-height: 4.8rem;
}

.templateAgenda__avatar {
  flex: none;
}

.templateAgenda .templateAgenda__avatar {
  width: 4.8rem;
  height: 4.8rem;
}

.templateAgenda__identificacao {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.templateAgenda__titulo {
  margin: 0 0 0.4rem;
  font-size: 3.6rem;
  font-weight: 800;
  line-height: 4rem;
  letter-spacing: -0.02em;
}

.templateAgenda__nome {
  margin: 0;
  font-size: 2.2rem;
  font-weight: 700;
  line-height: 2.8rem;
}

.templateAgenda__descricao {
  margin: 0;
  font-size: 1.7rem;
  line-height: 2.4rem;
}

.templateAgenda__vazio {
  margin: 1.2rem 0;
  color: var(--cor-apoio);
  font-size: 1.5rem;
  text-align: center;
}
</style>
