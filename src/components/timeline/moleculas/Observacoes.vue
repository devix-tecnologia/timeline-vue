<template>
  <section class="box box-observacoes">
    <h3>Obervações:</h3>
    <ul class="lista-obs">
      <li v-for="(item, index) of observacoes" :key="index" class="lista-item">
        <p class="texto">{{ item.mensagem }}</p>
        <div class="autor">
          {{ item.autor.nome }} em {{ item.criadaEm.toLocaleDateString() }} às
          {{ item.criadaEm.getHours() }}:{{
            item.criadaEm.getMinutes().toString().padStart(2, "0")
          }}
        </div>
      </li>
    </ul>
    <Botao
      :titulo="titulo"
      :aoClicar="aoClicar"
      :icone="`add`"
      :aparencia="`preenchido`"
      :tamanho="`pequeno`"
    />
  </section>
</template>

<script lang="ts">
import "material-symbols/outlined.css";
import { defineComponent, reactive, PropType } from "vue";
import { AoClicarEvento } from "../type";
import Botao from "./Botao.vue";
import { EventoDetalhado, Observacao } from "../typeDetalhado";

export default defineComponent({
  components: { Botao },
  name: "Observacoes",
  props: {
    titulo: {
      type: String,
    },
    icone: {
      type: String,
    },
    aoClicar: {
      required: false,
      type: Function as PropType<AoClicarEvento>,
    },
    observacoes: {
      required: true,
      type: Object as PropType<Observacao[]>,
    },
  },
  setup(props) {
    // Ordenando observações pela mais recente
    props.observacoes.sort(
      (a, b) => b.criadaEm.getTime() - a.criadaEm.getTime()
    );
    props = reactive(props);
    return {};
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
  background: var(--cor-fundo);
  box-shadow: 0px 0px 15px rgba(27, 47, 57, 0.15);
  border-radius: 1rem;
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
  color: var(--cor-acao);
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
