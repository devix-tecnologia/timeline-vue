![TimelineDevix](https://github.com/devix-tecnologia/timeline-vue/blob/044648477f0b124c6968d4e84de6781d7633b984/docs/timeline_topo.png)



# Timeline de Eventos DEVIX

Este é um projeto implementando uma linha do tempo de eventos utilizando Vue 3 e Typescript. Utiliza o Storybook para o desenvolvimento dos componentes seguindo o Design Atômico. 


![TimelineDevixExemplo](https://github.com/devix-tecnologia/timeline-vue/blob/91c3b94c6167ca02364507d58dc59bb804b3b51f/docs/timeline01.gif)


## 🛠 Como usar
---

### Instalação
  

```sh
yarn add @devix-tecnologia/timeline-vue
```

### Exemplo de código
  
```ts
//exemplo.vue

<template>
  <Timeline :perfilTimeline="perfilTimeline" :eventosTimeline="listaEventos" />  
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Timeline } from "@devix-tecnologia/timeline-vue";

export default defineComponent({
  setup() {

  const perfilTimeline = {
      nome: "Maria do Socorro",
      imagem: "https://this-person-does-not-exist.com/img/avatar-gen11071f8e0802a35d66684ee9376722b2.jpg",
      icone: "person",
    };
    const listaEventos = [
      {
        id: "15ea7863-2402-4b84-8a8d-10a00ba07e2f2",
        data: new Date("2023-04-26T18:10Z"),
        previsto: new Date("2023-04-26T18:10Z"),
        realizado: new Date("2023-04-26T18:15Z"),
        duracao: null,
        tolerancia: 20,
        titulo: "Vacina da gripe",
        subtitulo: "Posto de saúde do bairro",
        destaque: "",
        categoria: {
          nome: "Vacina",
          icone: "vaccines",
        },
        status: "realizado",
        criticidade: "alta",
      },
      {
        id: "15ea7863-2402-4b84-8a8d-10a00ba07e2f14",
        data: new Date("2023-05-09T17:00Z"),
        previsto: new Date("2023-05-09T17:00Z"),
        realizado: null,
        duracao: null,
        tolerancia: 10,
        titulo: "Vitamina D",
        subtitulo: "2 comprimidos",
        destaque: "",
        categoria: {
          nome: "Remédio",
          icone: "pill",
        },
        status: "planejado",
        criticidade: "baixa",
        aoCLicar: () => alert("Olá, mundo!"),
      },
    ];
    return {perfilTimeline, listaEventos };
  },
});
</script>

<style>
:root {
  --cor-primaria: #00e01d;
}
</style>
```


### ✨ Customização de estilos

Para customizar o visual da Timeline de acordo com a identidade visual da aplicação basta adicionar o código a seguir no CSS e alterar de acordo com a necessidade.

```css
:root {
  --fonte: 'Work Sans', sans-serif;
  font-size: 62.5%;

  --cor-primaria: #00e01d;
  --cor-secundaria: #1b2f39;
  --cor-terciaria: #ebf1f2;

  --cor-fundo: #fff;

  --cor-selecao: #ccf9d2;
  --cor-texto-selecao: #1b2f39;
  --cor-texto: #1b2f39;

  --cor-apoio: #57676f;
  --cor-linha: #e9eaeb;

  --cor-importante: #bb0202;
  --cor-alerta: #f0cc0d;
  --cor-sucesso: #00a816;
}

body {
  font-family: var(--fonte);
  font-size: 1.6rem;
  font-weight: 300;
}
```

### Propriedades:
  
A Timeline da DEVIX ordena e lista Eventos de forma crescente de acordo com a data/hora cadastrada.

Cada Evento mostra a hora prevista, hora em que o evento foi realizado, título, subtítulo, ícone de categoria, ícone de status, indicação de criticidade e campo para informação em destaque.


![TimelineDevixExemploEvento](https://github.com/devix-tecnologia/timeline-vue/blob/044648477f0b124c6968d4e84de6781d7633b984/docs/evento.png)


## 🚀  Contribuindo
---

Faça um fork do projeto, crie uma nova branch e faça seus commits.

### Importante:
- Os componentes da Timeline Devix são divididos em átomos, moléculas e organismos, seguindo os padrões do Design Atômico;
- Cada componente vem acompanhado de documentação no storybook;
- A timeline de demonstração utiliza dados mock;
- Dê uma olhada no arquivo ``` type.ts ``` também, ele é o arquivo de tipos com influência sobre toda a aplicação.
- Para ver o projeto funcionando no Storybook basta rodar:

```sh 
yarn storybook 
```

## 😉