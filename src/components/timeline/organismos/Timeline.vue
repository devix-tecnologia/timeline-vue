<template>
  <div ref="raiz" class="areaTimeline">
    <PerfilTimeline
      v-if="perfilTimeline"
      :nomePerfil="perfilTimeline.nome"
      :imagemPerfil="perfilTimeline.imagem"
      :iconePerfil="perfilTimeline.icone"
      data-testid="perfilTimeline"
    />

    <section class="timeline" :class="`timeline--${aparencia}`">
      <!-- SEPARADOR -->
      <div v-for="(evento, index) in eventosPorTipo" :key="evento.key">
        <component
          :is="componentes.separador"
          v-if="evento.tipo === 'dia'"
          :dataSeparador="evento.valor"
          :data-testid="`evento-timeline-${index}`"
        />
        <!--loop-->
        <component
          :is="componentes.evento"
          v-if="evento.tipo === 'evento'"
          :status="evento.valor.status"
          :criticidade="evento.valor.criticidade"
          :previstoPara="evento.valor.previstoPara"
          :realizado-em="evento.valor.realizado"
          :categoria="evento.valor.categoria"
          :titulo="evento.valor.titulo"
          :subtitulo="evento.valor.subtitulo"
          :texto-destaque="evento.valor.destaque"
          :ehAtual="evento.valor.atual"
          :clicavel="evento.valor.clicavel !== false"
          v-bind="componentes.comAcoes ? { acoes: evento.valor.acoes } : {}"
          :data-testid="`evento-timeline-${index}`"
          @click="handleEventoClick(evento.valor, $event)"
          @acao-click="
            (acao: AcaoEvento, mouseEvent: MouseEvent) =>
              $emit('acaoClick', evento.valor as Evento, acao, mouseEvent)
          "
        />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  nextTick,
  reactive,
  ref,
  watch,
  onMounted,
  onBeforeUnmount,
  PropType,
  Component,
} from 'vue';
import EventoTimeline from '../moleculas/EventoTimeline.vue';
import EventoTimelineMarcos from '../moleculas/EventoTimelineMarcos.vue';
import EventoTimelineCartao from '../moleculas/EventoTimelineCartao.vue';
import SeparadorPeriodo from '../moleculas/SeparadorPeriodo.vue';
import SeparadorPeriodoMarcos from '../moleculas/SeparadorPeriodoMarcos.vue';
import SeparadorPeriodoCartao from '../moleculas/SeparadorPeriodoCartao.vue';
import PerfilTimeline from '../moleculas/PerfilTimeline.vue';
import { AcaoEvento, Evento, Perfil } from '../type';
import { APARENCIAS_TIMELINE, AparenciaTimeline } from './Timeline.types';
import 'material-symbols/outlined.css';

/*
 * O primeiro ancestral do elemento que rola pela pessoa, sem passar da página: o elemento
 * da página (html e body) fica de fora, para a Timeline nunca rolar a página.
 */
function conteinerRolavel(elemento: HTMLElement): HTMLElement | null {
  const pagina = [document.documentElement, document.body, document.scrollingElement];
  for (let pai = elemento.parentElement; pai && !pagina.includes(pai); pai = pai.parentElement) {
    if (/^(auto|scroll|overlay)$/.test(getComputedStyle(pai).overflowY)) {
      return pai;
    }
  }
  return null;
}

type TipoEventoTimeline =
  | { tipo: 'dia'; valor: Date; key: number }
  | { tipo: 'evento'; valor: Evento; key: number }
  | { tipo: 'eventos'; valor: Evento[]; key: number };

/*
 * Cada aparência troca o separador de dia e o evento; as props passadas são as mesmas.
 * Só quem tem `comAcoes` recebe as ações do evento: nos demais, a prop viraria atributo.
 */
const COMPONENTES_POR_APARENCIA: Record<
  AparenciaTimeline,
  { separador: Component; evento: Component; comAcoes: boolean }
> = {
  padrao: { separador: SeparadorPeriodo, evento: EventoTimeline, comAcoes: false },
  cartoes: { separador: SeparadorPeriodoCartao, evento: EventoTimelineCartao, comAcoes: false },
  marcos: { separador: SeparadorPeriodoMarcos, evento: EventoTimelineMarcos, comAcoes: true },
};

export default defineComponent({
  components: {
    PerfilTimeline,
  },
  props: {
    perfilTimeline: {
      required: false,
      type: Object as PropType<Perfil>,
    },
    eventosTimeline: {
      required: true,
      type: Array as PropType<Evento[]>,
    },
    aparencia: {
      type: String as PropType<AparenciaTimeline>,
      default: 'padrao',
      validator: (aparencia: string) =>
        (APARENCIAS_TIMELINE as readonly string[]).includes(aparencia),
    },
    /*
     * Rola o contêiner da Timeline até o evento atual ao montar e quando a lista muda.
     * Desligue quando quem usa a Timeline cuida da posição da rolagem.
     */
    rolarAteOAtual: {
      type: Boolean,
      default: true,
    },
  },

  emits: {
    eventoClick: (_evento: Evento, _mouseEvent: MouseEvent) => true,
    acaoClick: (_evento: Evento, _acao: AcaoEvento, _mouseEvent: MouseEvent) => true,
  },

  setup(props, { emit }) {
    const handleEventoClick = (evento: Evento, mouseEvent: MouseEvent) => {
      if (evento.clicavel === false) {
        return;
      }

      emit('eventoClick', evento, mouseEvent);
    };

    /*
     * A lista recebida, sempre a da prop atual. Fica reativa porque a Timeline grava nela
     * o evento atual e o status atrasado; trocar a prop troca a lista exibida.
     */
    const eventosRecebidos = computed(() => reactive(props.eventosTimeline) as Evento[]);

    function carregarListaEventos() {
      const eventosAtuais: Evento[] = filtraEventoAtual(eventosRecebidos.value);
      eventosRecebidos.value.forEach((evento) => {
        const ehAtual = eventosAtuais.length > 0 && eventosAtuais[0] === evento;
        evento.atual = ehAtual;
        evento.scroll = ehAtual;
      });
    }

    const verifica_mesmo_dia = (a: Date, b: Date) => {
      const mesmo_dia = a.getDay() === b.getDay();
      const mesmo_mes = a.getMonth() === b.getMonth();
      const mesmo_ano = a.getFullYear() === b.getFullYear();
      return mesmo_dia && mesmo_mes && mesmo_ano;
    };

    //verifica qual evento está mais próximo da hora atual e coloca ele numa nova lista na primeira posição
    const filtraEventoAtual = (eventos: Evento[]) => {
      if (eventos) {
        const agora = Date.now();
        let minDiff: number | null = null;
        let listaEventos = [];
        for (const e of eventos) {
          const t = e.data.getTime();
          if (e.status === 'planejado' || e.status === 'atrasado') {
            const diff: number = Math.abs(agora - e.data.getTime());
            if (minDiff === null || (diff < minDiff && t <= agora)) {
              minDiff = diff;
              listaEventos.length = 0;
            } else if (diff > minDiff) {
              continue;
            }
            listaEventos.push(e);
          }
        }
        return listaEventos;
      } else {
        return [];
      }
    };

    // lista de eventos por tipo
    const eventosTimeline = computed(() => {
      // Ordena uma cópia: a lista de quem usa a Timeline não muda de ordem.
      const eventosOrdenados = [...eventosRecebidos.value].sort((a: Evento, b: Evento) => {
        return a.data.getTime() - b.data.getTime();
      });
      if (eventosOrdenados) {
        let resultado: Array<TipoEventoTimeline> = [];
        let dataAtual: Date | null = null;
        let idx = 0;
        let statusEvento;

        for (const evento of eventosOrdenados) {
          const agora = new Date();
          const dataEvento = evento.data;
          statusEvento = evento.status;
          const toleranciaEvento = evento.tolerancia * 60 * 1000;

          //altera status para atrasado
          if (
            statusEvento === 'planejado' &&
            dataEvento.getTime() + toleranciaEvento < agora.getTime()
          ) {
            evento.status = 'atrasado';
          }
          if (!dataAtual || !verifica_mesmo_dia(dataAtual, dataEvento)) {
            dataAtual = dataEvento;
            resultado.push({
              tipo: 'dia',
              valor: evento.data,
              key: ++idx,
            });
          }
          resultado.push({
            tipo: 'evento',
            valor: evento,
            key: ++idx,
          });
        }
        return resultado;
      } else {
        return [];
      }
    });

    const raiz = ref<HTMLElement | null>(null);

    /*
     * Centraliza o evento atual desta Timeline no primeiro ancestral que rola (overflow-y
     * auto ou scroll), que pode ser a própria Timeline. Só esse contêiner rola: nem a página
     * nem os contêineres com overflow hidden, que não rolam pela pessoa, mudam de posição.
     */
    const scrollParaItemAtual = () => {
      const itemAtual = raiz.value?.querySelector<HTMLElement>('.atual');
      const conteiner = itemAtual && conteinerRolavel(itemAtual);
      if (!itemAtual || !conteiner) {
        return;
      }

      const deslocamento =
        itemAtual.getBoundingClientRect().top - conteiner.getBoundingClientRect().top;
      const topo = Math.max(
        0,
        conteiner.scrollTop + deslocamento - (conteiner.clientHeight - itemAtual.offsetHeight) / 2
      );
      if (typeof conteiner.scrollTo === 'function') {
        conteiner.scrollTo({ top: topo, behavior: 'smooth' });
      } else {
        conteiner.scrollTop = topo;
      }
    };

    const rolarSePermitido = () => {
      if (props.rolarAteOAtual) {
        scrollParaItemAtual();
      }
    };

    carregarListaEventos();
    watch(
      () => props.eventosTimeline,
      async () => {
        carregarListaEventos();
        // Rola depois que a lista nova chegou ao DOM.
        await nextTick();
        rolarSePermitido();
      }
    );

    /*
     * Um único intervalo por Timeline, para o evento atual acompanhar o relógio. O intervalo
     * não rola: a pessoa pode ter rolado para outro lugar.
     */
    let intervalo: ReturnType<typeof setInterval> | undefined;
    onMounted(() => {
      rolarSePermitido();
      intervalo = setInterval(carregarListaEventos, 60000);
    });
    onBeforeUnmount(() => clearInterval(intervalo));

    return {
      componentes: computed(() => COMPONENTES_POR_APARENCIA[props.aparencia]),
      raiz,
      eventosPorTipo: eventosTimeline,
      scrollParaItemAtual,
      handleEventoClick,
    };
  },
});
</script>

<style>
/* TIMELINE */

.areaTimeline {
  background-color: var(--cor-fundo);
  position: relative;
}

.areaEvento {
  display: table-row;
  min-height: 8rem;
  position: relative !important;
  width: 100%;
}

.timeline {
  display: table;
  width: 100%;
  position: relative;
}

/*
 * APARÊNCIA CARTÕES
 * Cada separador e cada cartão desenha o seu trecho do trilho e o estende pelo
 * espaço até o próximo item. Uma linha só, num ::before da lista, cobriria todos
 * os textos e impediria o axe de medir o contraste deles.
 */

.timeline--cartoes {
  --trilho-largura: 5.6rem;
  --trilho-espaco: 1.2rem;
  --trilho-cor: var(--cor-linha);
  display: flex;
  flex-direction: column;
  gap: var(--trilho-espaco);
  padding: 1.2rem 1.6rem 3.2rem 0.8rem;
}

/*
 * APARÊNCIA MARCOS
 * A hora à esquerda, o marcador do status sobre o trilho e um cartão por evento. Como nos
 * cartões, cada item desenha o seu trecho do trilho; entre os dias, uma linha divisória.
 */

.timeline--marcos {
  --trilho-espaco: 1.2rem;
  --trilho-cor: var(--cor-linha);
  display: flex;
  flex-direction: column;
  gap: var(--trilho-espaco);
  padding: 0.8rem 0 2.4rem;
}

.timeline--marcos > div:not(:first-child) > .separadorMarcos {
  margin-top: 1.2rem;
  padding-top: 2rem;
  border-top: 1px solid var(--cor-linha);
}
</style>
