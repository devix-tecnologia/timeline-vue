![TimelineDevix](https://github.com/devix-tecnologia/timeline-vue/blob/044648477f0b124c6968d4e84de6781d7633b984/docs/timeline_topo.png)



# Timeline de Eventos DEVIX

Este é um projeto implementando uma linha do tempo de eventos utilizando Vue 3 e Typescript. Utiliza o Storybook para o desenvolvimento dos componentes seguindo o Design Atômico. 

<div align="center">
<img src="https://github.com/devix-tecnologia/timeline-vue/blob/91c3b94c6167ca02364507d58dc59bb804b3b51f/docs/timeline01.gif" width="300px"/>
</div>


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
  <main>
    <div class="telaTimeline">
      <Timeline 
      :perfilTimeline="perfilTimeline" :eventosTimeline="listaEventos"
      @eventoClick="emitirEventoClick"
    />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Timeline } from '@devix-tecnologia/timeline-vue'
import '@devix-tecnologia/timeline-vue/dist/style.css'

export default defineComponent({
  components: { Timeline },
  setup() {
    const emitirEventoClick = (evento: Evento) => {
      alert(`foi clicado no evento ${evento.titulo}`);
    };
    const perfilTimeline = {
      nome: 'Maria do Socorro',
      imagem: 'https://this-person-does-not-exist.com/img/avatar-gen11071f8e0802a35d66684ee9376722b2.jpg',
      icone: 'person'
    }
    const listaEventos = [
      {
        data: new Date('2023-04-26T18:10Z'),
        previstoPara: new Date('2023-04-26T18:10Z'),
        realizado: new Date('2023-04-26T18:15Z'),
        tolerancia: 20,
        titulo: 'Vacina da gripe',
        subtitulo: 'Posto de saúde do bairro',
        destaque: '',
        categoria: {
          nome: 'Vacina',
          icone: 'vaccines'
        },
        status: 'realizado',
        criticidade: 'alta'
      },
      {
        data: new Date('2023-05-09T17:00Z'),
        previstoPara: new Date('2023-05-09T17:00Z'),
        tolerancia: 10,
        titulo: 'Vitamina D',
        subtitulo: '2 comprimidos',
        destaque: '',
        categoria: {
          nome: 'Remédio',
          icone: 'pill'
        },
        status: 'planejado',
        criticidade: 'baixa',
      }
    ]
    return { emitirEventoClick, perfilTimeline, listaEventos }
  }
})
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
  
A Timeline ordena e lista Eventos de forma crescente de acordo com a data/hora cadastrada.

Cada Evento mostra a hora prevista, hora em que o evento foi realizado, título, subtítulo, ícone de categoria, ícone de status, indicação de criticidade e campo para informação em destaque.


![TimelineDevixExemploEvento](https://github.com/devix-tecnologia/timeline-vue/blob/044648477f0b124c6968d4e84de6781d7633b984/docs/evento.png)


## 🚀  Contribuindo
---

### Importante:
- Os componentes da Timeline são divididos em átomos, moléculas e organismos, seguindo os padrões do Design Atômico;
- Cada componente vem acompanhado de documentação no storybook;
- A timeline de demonstração utiliza dados mock;
- Dê uma olhada no arquivo ``` type.ts ``` também, ele é o arquivo de tipos com influência sobre toda a aplicação.
- Para ver o projeto funcionando no Storybook basta rodar:

```sh 
yarn storybook 
```

Faça um fork do projeto, crie uma nova branch e faça seus commits. Seguem passos para bons commits:

1) **Criar um Fork:** Acesse o repositório de origem no GitHub e clique em "Fork". Isso criará uma cópia do projeto na sua conta pessoal do GitHub.
1) **Clonar ou Atualizar o Seu Fork:** Se ainda não clonou o seu fork para a máquina local, faça-o com `git clone [URL_DO_SEU_FORK]`. Se já possui o projeto clonado, certifique-se de que seu fork esteja atualizado em relação ao projeto de origem usando os comandos:
   ```
   git remote add upstream [URL_DO_REPOSITORIO_ORIGEM]
   git fetch upstream
   git merge upstream/branch_de_referencia
   ```
1) **Atualizar Referências Remotas:** O comando `git remote update` atualiza as referências locais em relação aos repositórios remotos.
1) **Selecionar o Branch de Partida:** Em geral, utiliza-se o `develop` como branch base, mas verifique sempre no git graph ou em instruções específicas da tarefa qual branch deve ser utilizado.
1) **Sincronizar Mudanças Remotas:** Antes de iniciar as modificações, é uma boa prática sincronizar o branch local com o remoto usando `git pull origin branch_de_referencia`.
1) **Criar um Novo Branch:** Ao trabalhar em uma nova funcionalidade ou correção, crie um novo branch com um nome descritivo, como `feature-relatorio-cliente`, usando o comando `git checkout -b nome_do_branch`.
1) **Fazer Alterações e Commit:** Realize as alterações necessárias no código. Ao terminar, faça um commit seguindo um padrão de mensagens semânticas e imperativas. Lembre-se de criar e/ou executar testes automatizados para garantir que nada foi quebrado.
1) **Enviar Alterações para o GitHub:** Envie as alterações para o seu fork com o comando `git push origin nome_do_branch`.
1) **Abrir um Pull Request:** Acesse seu fork no GitHub e clique em "New Pull Request". Escolha os branches de origem e destino corretos e envie sua solicitação. O desenvolvedor ou equipe responsável pelo projeto de origem revisará suas alterações e, se aprovadas, fará o merge no projeto principal.

---

Código-fonte bom é código compartilhado! Contribua melhorando esse importante projeto. 😉
