# @devix-tecnologia/timeline-vue 3.6.0

Duas novas aparências da Timeline, telas prontas de agenda, temas claro e escuro com marca personalizável e uma série de correções de acessibilidade.

## ✨ Novidades

### Aparências da Timeline

A prop `aparencia` muda a forma de representar os eventos, com os mesmos dados:

- **`cartoes`**: um cartão por evento ao lado de um trilho, com o status por extenso e etiquetas de categoria, prioridade e destaque. O dia aparece por extenso ("Hoje", "Amanhã", "Domingo, 30 de julho de 1930").
- **`filosofia`**: a hora à esquerda, o marcador do status sobre o trilho e um cartão com o status, o cliente e as **ações do evento**.

Novos componentes exportados: `EventoTimelineCartao`, `EventoTimelineFilosofia` e o tipo `AparenciaTimeline`.

### Ações do evento

O `Evento` ganhou o campo opcional `acoes` (`AcaoEvento[]`): botões como "Concluir" ou "Reagendar", com ícone, destaque para a ação principal e versão só com ícone. O clique sai no evento `acaoClick(evento, acao, mouseEvent)`, separado do `eventoClick`.

### Telas prontas

- **`TemplateAgenda`**: tela de agenda com o perfil, a busca e duas visões: **Agenda**, com os atrasados em destaque, os próximos eventos e os concluídos, filtráveis, e **Histórico**, com os eventos já resolvidos na Timeline. O logo entra pelo slot `marca`.
- **`AgendaEventos`**: a agenda de um dia, para usar sozinha. Tipos `FiltroAgenda` e `VisaoAgenda`.
- O `Perfil` ganhou o campo opcional `descricao` (função ou cargo), e o `AvatarTimeline` ganhou a prop `iniciais`, para quando não há imagem.

### Temas claro e escuro, com a sua marca

- Cada token `--cor-*` traz o valor do tema claro e o do escuro, em `light-dark()`. O tema segue o do sistema.
- **`data-tema="claro"` ou `data-tema="escuro"`** num contêiner (ou no `html`) força um dos temas, para aplicações com botão de tema.
- Para aplicar a sua marca, redefina os tokens no mesmo formato, na página ou só num contêiner: `--cor-primaria: light-dark(#4338ca, #a5b4fc)`.
- Novos tokens: `--cor-texto-acao`, `--cor-texto-sucesso` e `--cor-texto-importante`, para o texto sobre os fundos de status, e `--cor-sucesso-sobre-fundo`, `--cor-importante-sobre-fundo`, `--cor-alerta-sobre-fundo` e `--cor-apoio-sobre-fundo`, para a cor do status como texto sobre o fundo.
- O `IconeCategoria` ganhou a prop `color`, que acompanha o `backgroundColor`.

### Rolagem até o evento atual

- A Timeline centraliza o evento atual só no próprio contêiner rolável: o primeiro ancestral com `overflow-y` `auto` ou `scroll`.
- Ela não rola mais a página nem contêineres com `overflow: hidden`.
- Com várias Timelines na mesma página, cada uma se posiciona no próprio evento atual.
- A atualização a cada minuto não rola mais.
- Nova prop **`rolarAteOAtual`** (padrão `true`) para desligar a rolagem.

## 🐛 Correções

- **Timeline:**
  - acompanha a troca da prop `eventosTimeline`;
  - não reordena mais a lista recebida;
  - não acumula `setInterval`, e o intervalo é limpo ao desmontar.
- **Botao:**
  - volta a aplicar `aparencia` e `tamanho`, que eram ignorados;
  - o texto dos botões preenchidos ganhou contraste;
  - o ícone decorativo saiu do nome acessível.
- **IconeCategoria:** a categoria passou a ser o nome acessível do ícone.
- **Contraste nos dois temas:**
  - ícones do `SeloStatus` e do `AvatarTimeline`;
  - criticidade do `CabecalhoEventoDetalhado`;
  - contorno do `BotaoStatus`.
- **Hora:** sempre com dois dígitos (`09:05`).

## ⚠️ O que pode mudar para quem já usa

- **Rolagem:** uma Timeline sem nenhum contêiner rolável antes rolava a página até o evento atual. Agora não rola nada. Para manter o posicionamento, dê altura e `overflow-y: auto` à Timeline ou a um contêiner dela, ou desligue com `:rolarAteOAtual="false"`.
- **`color-scheme`:** o CSS da biblioteca passa a declarar `color-scheme: light dark` no `:root`, para os temas funcionarem. No tema escuro, os controles nativos da página, como barras de rolagem e campos, também ficam escuros. Para manter a página no claro, declare `color-scheme: light` (ou use `data-tema="claro"`).
- **Botao:** como as classes de `aparencia` e `tamanho` voltaram, os botões passam a ter a aparência pedida, e não mais sempre a de contorno média.
- **Tokens:** quem redefine `--cor-*` com um valor só (sem `light-dark()`) continua funcionando. Esse valor passa a valer nos dois temas.

## 📚 Documentação e Storybook

- O README documenta as aparências, as telas prontas, os temas e a prop `rolarAteOAtual`.
- Novas stories:
  - **Temas e marca**: o tema padrão e uma marca fictícia, nos dois temas;
  - **Rolagem até o evento atual**;
  - **Finais da Copa do Mundo**: as 23 finais de 1930 a 2026, com filtro por seleção.
- As stories rodam no Vitest nos temas claro e escuro, com o axe e uma verificação de contraste dos ícones. Os testes unitários passaram a rodar no `pnpm test` e no CI.

## 🔧 Manutenção

- Dependências atualizadas. O TypeScript fica na 6, porque o vue-tsc ainda não suporta a 7.
- Node 24.22 e pnpm 11.28. O CI passou a rodar o typecheck.
