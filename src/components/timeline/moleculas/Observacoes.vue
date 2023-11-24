<template>
  <section class="box box-observacoes">
    <h3>Observações:</h3>
    <ul class="lista-obs">
      <li v-for="(item, index) of observacoes" :key="index" class="lista-item">
        <p class="texto">{{ item.mensagem }}</p>
        <div class="autor">
          {{ item.autor.nome }} em {{ item.criadaEm.toLocaleDateString() }} às
          {{ item.criadaEm.getHours() }}:{{
            item.criadaEm.getMinutes().toString().padStart(2, '0')
          }}
        </div>
      </li>
    </ul>
    <Botao
      :titulo="tituloBotao"
      :icone="`add`"
      :aparencia="`preenchido`"
      :tamanho="`pequeno`"
      @click="emitirAdicionarClick"
    />
  </section>
</template>

<script lang="ts">
import 'material-symbols/outlined.css';
import { defineComponent, reactive, PropType } from 'vue';
import Botao from './Botao.vue';
import { Observacao } from '../typeDetalhado';

export default defineComponent({
  components: { Botao },
  name: 'Observacoes',
  props: {
    tituloBotao: {
      type: String,
    },
    observacoes: {
      required: true,
      type: Object as PropType<Observacao[]>,
    },
  },

  emits: {
    adicionarClick: (mouseEvent: MouseEvent) => true,
  },

  setup(props, { emit }) {
    const emitirAdicionarClick = (mouseEvent: MouseEvent) => {
      emit('adicionarClick', mouseEvent);
    };

    // Ordenando observações pela mais recente
    props.observacoes.sort((a, b) => b.criadaEm.getTime() - a.criadaEm.getTime());
    props = reactive(props);

    return { emitirAdicionarClick };
  },
});
</script>

<style scoped>
/* CABEÇALHO */
.material-symbols-outlined {
  font-size: 2.6rem;
}

.box {
  padding: 1.4rem;
  background: transparent;
  box-shadow: 0px 0px 15px var(--cor-sombra);
  border-radius: 1rem;
  color: var(--cor-texto);
}

.box-observacoes {
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
}

.btn.preenchido {
  background: var(--cor-terciaria);
  color: var(--cor-texto);
  border-color: var(--cor-terciaria);
}

.btn:hover,
.btn:active {
  background: var(--cor-acao);
}

.lista-obs {
  padding-inline-start: 1.4rem;
}

.lista-item {
  font-size: small;
  margin-bottom: 1.4rem;
}

.lista-item:nth-last-child(-n + 1) {
  margin-bottom: 0;
}
.lista-item .autor {
  font-size: 0.6em;
  margin-top: 0.5em;
  text-transform: uppercase;
  color: var(--cor-apoio);
}
</style>
