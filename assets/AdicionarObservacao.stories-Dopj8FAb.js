import{A as o}from"./AdicionarObservacao-DBdUS7Z7.js";import"./vue.esm-bundler-DRZWSEY8.js";/* empty css                 */import"./EditarEvento-D0R0T-oK.js";import"./AreaSalvamento-B3pSHw6x.js";import"./Botao-Degnhl23.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const g={title:"Devix/Eventos/Templates/AdicionarObservacao",component:o,parameters:{componentSubtitle:"Tela de adicionar observação"},argTypes:{}},t=n=>({components:{AdicionarObservacao:o},setup(){return{handleAdicionarClick:(s,d)=>{alert(`Observação adicionada: ${s}`)},args:n}},template:'<AdicionarObservacao :adicionarClick="handleAdicionarClick" :salvarVisivel="args.salvarVisivel" />'}),a=t.bind({});a.args={salvarVisivel:!0};var e,r,i;a.parameters={...a.parameters,docs:{...(e=a.parameters)==null?void 0:e.docs,source:{originalSource:`args => ({
  components: {
    AdicionarObservacao
  },
  setup() {
    const handleAdicionarClick = (mensagem: string, mouseEvent: MouseEvent) => {
      alert(\`Observação adicionada: \${mensagem}\`);
    };
    return {
      handleAdicionarClick,
      args
    };
  },
  template: '<AdicionarObservacao :adicionarClick="handleAdicionarClick" :salvarVisivel="args.salvarVisivel" />'
})`,...(i=(r=a.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const O=["Padrao"];export{a as Padrao,O as __namedExportsOrder,g as default};