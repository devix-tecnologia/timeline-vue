# 🧩 Task 005 — Rolagem até o evento atual só dentro da própria timeline

- Status: in-progress
- Type: fix
- Assignee: sidartaveloso

## Description

**A intenção está certa:** ao montar, a timeline se posiciona no evento mais próximo de acontecer (o "atual").
**A implementação não:** em `src/components/timeline/organismos/Timeline.vue`, o `scrollParaItemAtual` faz

```js
const itemAtual = document.querySelector('.atual');
itemAtual.scrollIntoView({ behavior: 'smooth', block: 'center' });
```

e é chamado no `onMounted`, em cada `carregarListaEventos` (a cada troca da prop) e no intervalo de 60 s.

### Defeitos

1. **Rola todos os ancestrais, e não só a timeline.** O `scrollIntoView` centraliza o elemento na janela e
   rola cada ancestral rolável: o contêiner da timeline, os contêineres da aplicação que a usa e a própria
   página. Efeitos observados:
   - uma timeline dentro de uma moldura com `overflow: hidden` (por exemplo, uma tela reduzida com
     `transform: scale` para pré-visualização) faz a moldura rolar por código: o topo do conteúdo fica
     cortado e sobra espaço em branco embaixo;
   - a página inteira rola ao montar, mesmo quando a timeline está num bloco que rola sozinho;
   - quem já posiciona o próprio contêiner da timeline tem a posição desfeita pela biblioteca.
2. **Procura o `.atual` no documento inteiro.** `document.querySelector('.atual')` pega o primeiro `.atual`
   da página, que pode ser de outra timeline: com várias timelines na mesma página, só a primeira se
   posiciona, e as outras podem rolar a página até a primeira.
3. **Rola de novo a cada minuto.** Como o `carregarListaEventos` roda no intervalo de 60 s, a página volta
   ao evento atual mesmo depois de a pessoa ter rolado para outro lugar.

### O que fazer

- Procurar o evento atual **dentro do próprio componente** (uma `ref` do contêiner, e não `document`).
- Rolar **só o contêiner rolável da timeline** (o `scrollTop` do elemento que rola, centralizando o evento),
  sem `scrollIntoView` e sem mexer em ancestrais nem na página.
- Uma prop para quem cuida da posição sozinho, por exemplo `rolarAteOAtual` (padrão `true`, para não mudar o
  comportamento de quem já usa), que desliga a rolagem automática.
- Rolar ao montar e quando a lista muda, mas **não no intervalo de 60 s** (ou só se a pessoa não rolou desde
  a última vez).

### Critérios de aceite

- Duas timelines na mesma página: cada uma se posiciona no próprio evento atual, e a página não rola.
  Há teste.
- Uma timeline dentro de um contêiner com `overflow: hidden`: o contêiner não rola. Há teste.
- Com `rolarAteOAtual` desligado, nenhuma rolagem acontece. Há teste.
- O intervalo de 60 s não traz a timeline de volta ao evento atual depois de a pessoa rolar. Há teste.
- `pnpm lint`, `pnpm typecheck`, `pnpm test` e `pnpm build` passam; nova versão publicada no npm.

## Tasks

<!-- [x] feito · [ ] em aberto · [ ] ... — adiado: <razão> para o que se decidiu não fazer -->

- [x] Evento atual procurado dentro do componente (`ref` na raiz da Timeline)
- [x] Rolagem só do contêiner da timeline, sem `scrollIntoView`
- [x] Prop para desligar a rolagem automática (`rolarAteOAtual`, padrão `true`)
- [x] Sem rolagem no intervalo de 60 s
- [x] Story com duas timelines na mesma página, com play function (**Rolagem até o evento atual**)
- [ ] Nova versão publicada, com a prop documentada no README — prop documentada; publicação pendente

## Notes

- Relacionada à task-003 (correções de comportamento e reatividade da `Timeline`).
- **Qual contêiner rola.** O primeiro ancestral do evento atual com `overflow-y` `auto`, `scroll` ou
  `overlay`, que pode ser a própria Timeline. A busca para antes do `html` e do `body`, então a página nunca
  rola; um contêiner com `overflow: hidden` não conta como rolável. Sem contêiner rolável, nada rola.
- **Mudança de comportamento.** Antes, uma Timeline sem contêiner rolável fazia a página rolar até o evento
  atual. Agora não rola: para manter o posicionamento, ponha a Timeline (ou um contêiner dela) com altura e
  `overflow-y: auto`.
- **`scrollParaItemAtual`** continua exposto pela instância (via `ref`), agora com a mesma regra. Serve para
  quem desliga `rolarAteOAtual` e quer posicionar num momento escolhido.
- **Testes.** `Timeline.test.ts`, bloco "rolagem até o evento atual", um teste por critério de aceite; a story
  **Rolagem até o evento atual** confere no navegador as duas caixas, a moldura com `overflow: hidden` e a
  página. Todos reprovam com a implementação anterior.
- **Versão.** O `npm view @devix-tecnologia/timeline-vue` responde `latest` 3.4.4, mas o documento do pacote em
  `registry.npmjs.org` (consultado direto) já traz a 3.5.0 como `latest`, publicada em 2026-08-24 pelo CI com
  provenance, e o tarball da 3.5.0 baixa. Ver o item 8 da task-003. Com os `feat` desde a tag `v3.5.0`, o
  semantic-release calcula a 3.6.0 quando a `main` receber a develop.
