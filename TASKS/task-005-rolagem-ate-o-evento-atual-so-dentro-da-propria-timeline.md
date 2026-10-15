# 🧩 Task 005 — Rolagem até o evento atual só dentro da própria timeline

- Status: pending
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

- [ ] Evento atual procurado dentro do componente
- [ ] Rolagem só do contêiner da timeline, sem `scrollIntoView`
- [ ] Prop para desligar a rolagem automática
- [ ] Sem rolagem no intervalo de 60 s
- [ ] Story com duas timelines na mesma página, com play function
- [ ] Nova versão publicada, com a prop documentada no README

## Notes

- Relacionada à task-003 (correções de comportamento e reatividade da `Timeline`).
