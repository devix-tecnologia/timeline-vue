# 🧩 Task 003 — Corrige CSS publicado, acessibilidade e reatividade da timeline

- Status: pending
- Type: fix
- Assignee: sidartaveloso

## Description
Defeitos encontrados ao usar a versão publicada (3.4.4) no OpenTask BTalk, a linha do tempo da oportunidade. Ela fica no repositório `sidartaveloso/opentask`, em `packages/btalk`, e foi feita na task-045. O BTalk contorna cada defeito com um comentário no código. Quando esta correção for publicada, esses contornos podem sair.

### Defeitos

1. **O import do CSS falha.** No `package.json`, o `exports` aponta `./dist/style.css`, mas o build gera `dist/index.css`. O `dist/style.css` local é um arquivo antigo, de 2024, que o build não gera. Quem segue o README e importa `@devix-tecnologia/timeline-vue/dist/style.css` recebe um erro. Corrigir o nome do CSS gerado (por exemplo, `build.cssFileName`) ou o `exports`, sem quebrar quem já importa.
2. **O contorno de foco foi apagado.** O `src/global.css` tem `*:focus { outline: none; }` global, e quem navega pelo teclado não vê onde está (WCAG 2.4.7). Use `:focus-visible` com um contorno visível.
3. **O evento não responde ao teclado.** O `EventoTimeline.vue` é um `<article>` só com `@click`, sem `tabindex`, `role` nem tratamento de Enter e Espaço (WCAG 2.1.1).
4. **Eventos de dia inteiro mostram 0:00.** O `HoraEvento.vue` sempre mostra a hora, então um evento que só tem data aparece como 0:00. O tipo `Evento` precisa de um jeito opcional de dizer que o evento não tem hora, e nesse caso a hora não aparece.
5. **A fonte vem do Google Fonts.** O `src/global.css` importa a Work Sans de `fonts.googleapis.com`. São uma requisição externa a cada carga, um vazamento de IP e referrer, e uma falha quando não há internet. Deixe a fonte para quem usa o componente (a variável `--fonte` já existe) ou empacote a fonte.
6. **O separador de dia está errado.** Em `Timeline.vue`, o `verifica_mesmo_dia` compara `getDay()`, que é o dia da semana, e não `getDate()`, o dia do mês. Dois eventos do mesmo mês que caem no mesmo dia da semana ficam no mesmo dia.
7. **A reatividade está quebrada e há um vazamento de intervalo.** Em `Timeline.vue`:
   - `reactive(props.eventosTimeline)` embrulha só a lista inicial: trocar a prop não atualiza a linha;
   - o `.sort()` do `computed` reordena a própria lista recebida na prop;
   - o `computed` chama `atualizarEventoAtual`, que cria um `setInterval` novo a cada recálculo, e nenhum `clearInterval` roda ao desmontar.
8. **A versão 3.5.0 não chegou ao npm.** A opacidade dos eventos realizados já foi corrigida no código (`2057c45`, 0,7). O commit de release e a tag `v3.5.0` existem no GitHub, mas o `latest` do npm continua na 3.4.4. Descubra por que a publicação não aconteceu.

### Critérios de aceite

- Cada defeito tem um teste que reprova antes da correção e passa depois, unitário ou no Storybook com o axe.
- O import do CSS funciona a partir do pacote empacotado (`pnpm pack`, instalado num projeto de teste), e o README mostra o caminho certo.
- O teste de acessibilidade do Storybook passa sem violações, e a navegação por teclado foi conferida.
- `pnpm lint`, `pnpm typecheck`, `pnpm test` e `pnpm build` passam.
- A nova versão foi publicada no npm.

## Tasks
<!-- [x] feito · [ ] em aberto · [ ] ... — adiado: <razão> para o que se decidiu não fazer -->
- [ ] Nome do CSS gerado alinhado ao `exports`, conferido com `pnpm pack`
- [ ] Contorno de foco visível com `:focus-visible`
- [ ] Evento acionável pelo teclado (Enter e Espaço)
- [ ] Evento de dia inteiro sem hora
- [ ] Fonte sem requisição ao Google Fonts
- [ ] Separador de dia com `getDate()`
- [ ] Reatividade à prop, sem reordenar a lista recebida e sem vazar o `setInterval`
- [ ] Causa da 3.5.0 ausente no npm, e nova versão publicada

## Notes
- A configuração da branch base das tasks está em `.taskin.json`, em `automation.defaultBranch` (`develop`). O `taskin config` não tem opção para ela. O `hookConfig.baseBranch` é a branch base passada aos hooks.
