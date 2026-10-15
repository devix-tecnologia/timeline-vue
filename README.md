![TimelineDevix](https://github.com/devix-tecnologia/timeline-vue/blob/044648477f0b124c6968d4e84de6781d7633b984/docs/timeline_topo.png)

# Timeline de Eventos DEVIX

Este é disponibiza componentes de linha do tempo de eventos utilizando Vue 3 e Typescript. Utiliza o Storybook para o desenvolvimento dos componentes seguindo o Design Atômico.

<div align="center">
<img src="https://github.com/devix-tecnologia/timeline-vue/blob/91c3b94c6167ca02364507d58dc59bb804b3b51f/docs/timeline01.gif" width="300px"/>
</div>

## 🛠 Como usar

---

### Instalação

```sh
yarn add @devix-tecnologia/timeline-vue
```

### Formas de Importação

A biblioteca oferece duas formas de importação:

#### 1. Como Plugin Vue (instala todos componentes globalmente)

```ts
import { createApp } from 'vue';
import TimelinePlugin from '@devix-tecnologia/timeline-vue';
import '@devix-tecnologia/timeline-vue/dist/style.css';

const app = createApp(App);
app.use(TimelinePlugin);
```

#### 2. Componentes Individuais (tree-shaking automático - recomendado)

```ts
import { TimelineComponent, Tipos } from '@devix-tecnologia/timeline-vue';
import '@devix-tecnologia/timeline-vue/dist/style.css';
```

> 💡 **Dica:** Use a opção 2 para melhor tree-shaking e menor bundle final. Use a opção 1 apenas se precisar de todos os componentes registrados globalmente.

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
import { TimelineComponent } from '@devix-tecnologia/timeline-vue'
import '@devix-tecnologia/timeline-vue/dist/style.css'

export default defineComponent({
  components: { Timeline: TimelineComponent },
  setup() {
    const emitirEventoClick = (evento: Evento) => {
      alert(`foi clicado no evento ${evento.titulo}`);
    };
    const perfilTimeline = {
      nome: 'Maria do Socorro',
      imagem: 'https://images.unsplash.com/photo-1526080652727-5b77f74eacd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1752&q=80',
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

  --cor-importante: #fc3636;
  --cor-alerta: #f0cc0d;
  --cor-sucesso: #00a816;
  --cor-acao: #0187b1;

  /* Texto sobre os fundos de ação, sucesso e importante. */
  --cor-texto-acao: #0d1117;
  --cor-texto-sucesso: #0d1117;
  --cor-texto-importante: #0d1117;
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

### Rolagem até o evento atual

A Timeline marca como atual o evento planejado ou atrasado mais próximo do horário corrente. Ao montar e quando a lista de eventos muda, ela centraliza esse evento no primeiro ancestral com `overflow-y` `auto` ou `scroll`, que pode ser a própria Timeline:

```vue
<div style="height: 40rem; overflow-y: auto">
  <Timeline :eventosTimeline="listaEventos" />
</div>
```

- Só esse contêiner rola: a página e os contêineres com `overflow: hidden` não mudam de posição. Sem um contêiner que role, nada rola.
- Cada Timeline procura o próprio evento atual, então várias Timelines na mesma página se posicionam cada uma no seu.
- A atualização a cada minuto, que acompanha o relógio, não rola de novo: a posição que a pessoa escolheu fica.

Para cuidar da posição por conta própria, desligue a rolagem com a prop `rolarAteOAtual` (padrão `true`):

```vue
<Timeline :eventosTimeline="listaEventos" :rolarAteOAtual="false" />
```

### Aparências

A prop `aparencia` muda a forma de representar os eventos, com os mesmos dados:

| Valor               | Como os eventos aparecem                                                                                                                        |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `padrao` (o padrão) | Linha vertical, com a hora à esquerda e o ícone da categoria sobre a linha.                                                                     |
| `cartoes`           | Um cartão por evento ao lado de um trilho, com o status por extenso e etiquetas de categoria, prioridade e destaque. O dia aparece por extenso. |
| `agiliza`           | A hora à esquerda, o marcador do status sobre o trilho e um cartão com o status, o cliente e as ações do evento.                                |

```vue
<Timeline aparencia="cartoes" :perfilTimeline="perfilTimeline" :eventosTimeline="listaEventos" />
```

O tipo `AparenciaTimeline` é exportado pelo pacote. No Storybook, a story **Organismos/Timeline › Aparências lado a lado** mostra a mesma agenda em todas as aparências.

#### Ações do evento

Na aparência `agiliza`, cada evento pode trazer botões de ação no campo `acoes`. O clique sai no evento `acaoClick`, separado do `eventoClick`:

```ts
const evento = {
  // ...
  acoes: [
    { id: 'abrir-proposta', rotulo: 'Abrir proposta', principal: true },
    { id: 'mais-acoes', rotulo: 'Mais ações', icone: 'more_horiz', apenasIcone: true },
  ],
};
```

```vue
<Timeline
  aparencia="agiliza"
  :eventosTimeline="listaEventos"
  @acaoClick="(evento, acao) => executar(acao.id, evento)"
/>
```

## 🧩 Telas prontas

Além da `Timeline`, a biblioteca traz telas inteiras, prontas para usar, e os organismos com que elas são montadas. Quem usa a biblioteca passa os dados e trata os eventos; a navegação entre as etapas da tela fica com o componente.

| Componente         | O que é                                                                                                 |
| ------------------ | ------------------------------------------------------------------------------------------------------- |
| `TemplateAgenda`   | Tela de agenda: cabeçalho com o perfil, busca e as visões **Agenda** e **Histórico**.                   |
| `TemplateTimeline` | Tela de acompanhamento: linha do tempo, detalhe do evento, edição do status e inclusão de observações.  |
| `AgendaEventos`    | A agenda de um dia, com filtros: os atrasados em destaque, os próximos eventos e os concluídos.         |
| `EventoDetalhado`  | O detalhe de um evento, com as observações e os botões para editar o status e adicionar uma observação. |
| `EditarEvento`     | Moldura de edição, com os slots `conteudo` e `salvamento` e os botões de salvar e cancelar.             |

No Storybook, cada uma tem stories em **Templates** e **Organismos**.

### Tela de agenda (`TemplateAgenda`)

No topo ficam a marca (slot `marca`), o avatar com as iniciais, o título, o nome e a função (`perfil.descricao`). Abaixo, a busca, que filtra pelo título, subtítulo, destaque e categoria, e a escolha entre duas visões:

- **Agenda** (`AgendaEventos`): os pendentes que passaram do horário em destaque, os próximos eventos do dia e os concluídos, com os filtros Todos, Pendentes e Concluídos;
- **Histórico**: os eventos já resolvidos (realizados, adiados e cancelados), na `Timeline` com a aparência `agiliza`.

```vue
<TemplateAgenda
  :perfil="perfil"
  :eventos="eventos"
  @eventoClick="abrirEvento"
  @acaoClick="(evento, acao) => executar(acao.id, evento)"
  @diaClick="escolherDia"
>
  <template #marca><img src="/logo.svg" alt="Minha empresa" /></template>
</TemplateAgenda>
```

| Prop            | Padrão      | Descrição                                                         |
| --------------- | ----------- | ----------------------------------------------------------------- |
| `perfil`        | —           | `Perfil` mostrado no topo (nome, imagem e `descricao`).           |
| `eventos`       | —           | `Evento[]` da agenda e do histórico.                              |
| `titulo`        | `'Eventos'` | Título da tela.                                                   |
| `dia`           | hoje        | Dia mostrado na agenda.                                           |
| `visaoInicial`  | `'agenda'`  | `'agenda'` ou `'historico'` (tipo `VisaoAgenda`).                 |
| `filtroInicial` | `'todos'`   | `'todos'`, `'pendentes'` ou `'concluidos'` (tipo `FiltroAgenda`). |

Eventos: `eventoClick(evento, mouseEvent)`, `acaoClick(evento, acao, mouseEvent)`, para as ações do campo `acoes` de cada evento, e `diaClick(mouseEvent)`, no dia da agenda, para quem quiser abrir um seletor de data.

O `AgendaEventos` pode ser usado sozinho, com as props `eventos`, `dia` e `filtroInicial` e os mesmos três eventos. Ele não altera o status dos eventos: são pendentes os `planejado`, `atrasado` e `adiantado`.

### Tela de acompanhamento (`TemplateTimeline`)

Mostra a linha do tempo de uma pessoa e conduz as etapas a partir dela: ao clicar num evento, abre o detalhe (`EventoDetalhado`); do detalhe, a pessoa edita o status ou adiciona uma observação. O botão de voltar do topo leva de volta à linha do tempo; na linha do tempo, ele emite `voltarClick`, para quem usa o componente decidir para onde ir.

```vue
<TemplateTimeline
  :perfil="perfil"
  :eventos="eventosDetalhados"
  @editarStatusSalvarClicked="(evento, status) => salvarStatus(evento, status)"
  @adicionarObservacaoSalvarClicked="(evento, mensagem) => salvarObservacao(evento, mensagem)"
  @voltarClick="sair"
/>
```

Os eventos são do tipo `EventoDetalhado` (exportado em `TiposDetalhado`): um `Evento` com a lista de `observacoes`. A tela só avisa o que a pessoa fez; gravar o status e a observação fica com quem usa o componente. Os eventos emitidos são:

| Evento                                 | Quando                                                    |
| -------------------------------------- | --------------------------------------------------------- |
| `eventoTimelineClicked`                | Um evento da linha do tempo foi aberto.                   |
| `eventoStatusEditClicked`              | No detalhe, a pessoa pediu para editar o status.          |
| `eventoDetalhadoObservacoesAddClicked` | No detalhe, a pessoa pediu para adicionar uma observação. |
| `editarStatusSalvarClicked`            | O novo status foi salvo (`evento`, `status`).             |
| `editarStatusCancelarClicked`          | A edição do status foi cancelada.                         |
| `adicionarObservacaoSalvarClicked`     | A observação foi salva (`evento`, `mensagem`).            |
| `adicionarObservacaoCancelarClicked`   | A inclusão da observação foi cancelada.                   |
| `voltarClick`                          | O botão de voltar foi clicado na linha do tempo.          |

Todos recebem o `MouseEvent` como último argumento.

### Cores

As telas usam os mesmos tokens `--cor-*` da [customização de estilos](#-customização-de-estilos). Para aplicar a identidade de uma marca só numa parte da página, defina os tokens num contêiner em volta do componente, como fazem as stories da aparência `agiliza`.

## 🚀 Contribuindo

---

### Importante:

- Os componentes da Timeline são divididos em átomos, moléculas e organismos, seguindo os padrões do Design Atômico;
- Cada componente vem acompanhado de documentação no storybook;
- A timeline de demonstração utiliza dados mock;
- Dê uma olhada no arquivo `type.ts` também, ele é o arquivo de tipos com influência sobre toda a aplicação.
- Para ver o projeto funcionando no Storybook basta rodar:

```sh
yarn storybook
```

### Executando com npm / yarn / pnpm

Se preferir outro gerenciador de pacotes, aqui estão exemplos equivalentes:

- Instalar dependências

```sh
# npm
npm install

# yarn
yarn install

# pnpm
pnpm install
```

- Rodar Storybook (modo dev)

```sh
# npm
npm run storybook

# yarn
yarn storybook

# pnpm
pnpm storybook
```

- Executar Storybook sem instalar dependências locais (útil para checar rápido)

```sh
# com npx
npx storybook dev -p 6006

# com pnpm
pnpm dlx storybook dev -p 6006

# com yarn (se suportado)

```

### Expor o Storybook para outras pessoas

Para permitir acesso pela rede local, inicie o Storybook aceitando conexões externas:

```sh
# passa argumento extra ao script
npm run storybook -- --host 0.0.0.0
# ou
pnpm storybook -- --host 0.0.0.0
```

Depois, compartilhe o `http://<sua-ip-local>:6006` com quem você quiser na mesma rede.

Para expor publicamente (internet), use uma ferramenta de túnel como `ngrok` ou `localtunnel`:

```sh
# com ngrok
ngrok http 6006

# ou usar localtunnel
npx localtunnel --port 6006
```

Essas opções geram um URL público que você pode enviar para outras pessoas.

1. **Criar um Fork:** Acesse o repositório de origem no GitHub e clique em "Fork". Isso criará uma cópia do projeto na sua conta pessoal do GitHub.
1. **Clonar ou Atualizar o Seu Fork:** Se ainda não clonou o seu fork para a máquina local, faça-o com `git clone [URL_DO_SEU_FORK]`. Se já possui o projeto clonado, certifique-se de que seu fork esteja atualizado em relação ao projeto de origem usando os comandos:
   ```
   git remote add upstream [URL_DO_REPOSITORIO_ORIGEM]
   git fetch upstream
   git merge upstream/branch_de_referencia
   ```
1. **Atualizar Referências Remotas:** O comando `git remote update` atualiza as referências locais em relação aos repositórios remotos.
1. **Selecionar o Branch de Partida:** Em geral, utiliza-se o `develop` como branch base, mas verifique sempre no git graph ou em instruções específicas da tarefa qual branch deve ser utilizado.
1. **Sincronizar Mudanças Remotas:** Antes de iniciar as modificações, é uma boa prática sincronizar o branch local com o remoto usando `git pull origin branch_de_referencia`.
1. **Criar um Novo Branch:** Ao trabalhar em uma nova funcionalidade ou correção, crie um novo branch com um nome descritivo, como `feature-relatorio-cliente`, usando o comando `git checkout -b nome_do_branch`.
1. **Fazer Alterações e Commit:** Realize as alterações necessárias no código. Ao terminar, faça um commit seguindo um padrão de mensagens semânticas e imperativas. Lembre-se de criar e/ou executar testes automatizados para garantir que nada foi quebrado.
1. **Enviar Alterações para o GitHub:** Envie as alterações para o seu fork com o comando `git push origin nome_do_branch`.
1. **Abrir um Pull Request:** Acesse seu fork no GitHub e clique em "New Pull Request". Escolha os branches de origem e destino corretos e envie sua solicitação. O desenvolvedor ou equipe responsável pelo projeto de origem revisará suas alterações e, se aprovadas, fará o merge no projeto principal.

---

Código-fonte bom é código compartilhado! Contribua melhorando esse importante projeto. 😉
