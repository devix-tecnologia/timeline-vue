<template>
  <Botao :aparencia="aparencia" :class="classes" :aoClicar="aoClicar">
    <IconeStatus class="icone" :status="status" /> {{ status }}
  </Botao>
</template>

<script lang="ts">
import "material-symbols/outlined.css";
import { defineComponent, reactive, computed, PropType } from "vue";
import { AoClicarEvento } from "../type";
import Botao from "./Botao.vue";
import IconeStatus from "../atomos/IconeStatus.vue";

export default defineComponent({
  components: { Botao, IconeStatus },
  name: "BotaoStatus",
  props: {
    aparencia: {
      type: String,
    },
    status: {
      required: true,
      type: String,
    },
    aoClicar: {
      required: false,
      type: Function as PropType<AoClicarEvento>,
    },
  },
  setup(props) {
    props = reactive(props);

    return {
      classes: computed(() => ({
        [`${props.status || "planejado"}`]: true,
      })),
    };
  },
});
</script>

<style scoped>
/* CABEÇALHO */
.material-symbols-outlined {
  font-size: 2.6rem;
}

.btn {
  text-transform: capitalize;
}

.icone {
  font-size: 2.4rem;
  padding: 0.4rem 1.4rem 0 0;
  display: inline-block;
  width: auto;
}

.planejado.icone {
  display: none;
}

.btn.realizado {
  border: 1px solid var(--cor-sucesso);
  color: var(--cor-sucesso);
}
.btn.realizado:active,
.btn.preenchido.realizado {
  background: var(--cor-sucesso);
  color: var(--cor-fundo);
}
.btn.realizado:active .icone::before,
.btn.preenchido.realizado .icone::before {
  color: var(--cor-fundo);
}

.btn.cancelado {
  border: 1px solid var(--cor-importante);
  color: var(--cor-importante);
}
.btn.cancelado:active,
.btn.preenchido.cancelado {
  background: var(--cor-importante);
  color: var(--cor-fundo);
}
.btn.cancelado:active .icone::before,
.btn.preenchido.cancelado .icone::before {
  color: var(--cor-fundo);
}

.btn.atrasado {
  border: 1px solid var(--cor-alerta);
  color: var(--cor-alerta);
}

.btn.atrasado:active,
.btn.preenchido.atrasado {
  background: var(--cor-alerta);
  color: var(--cor-secundaria);
}
.btn.atrasado:active .icone::before,
.btn.preenchido.atrasado .icone::before {
  color: var(--cor-secundaria);
}

.btn.adiado {
  border: 1px solid var(--cor-apoio);
  color: var(--cor-apoio);
}

.btn.adiado:active,
.btn.preenchido.adiado {
  background: var(--cor-apoio);
  color: var(--cor-fundo);
}

.btn.adiado:active .icone::before,
.btn.preenchido.adiado .icone::before {
  color: var(--cor-fundo);
}
</style>
